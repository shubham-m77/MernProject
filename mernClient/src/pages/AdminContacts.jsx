import { React, useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { FaTrashCan } from "react-icons/fa6";
import { toast } from 'react-toastify';
import Footer from '../components/Footer'

const AdminContacts = () => {
  const { authToken } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const contactData = async () => {
    try {
      const response = await fetch("http://localhost:2000/admin/contacts", {
        method: "GET",
        headers: {
          "Authorization": authToken
        }
      });
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    contactData();
  }, [authToken]);

  // Handle delete
  const deleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:2000/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": authToken
        }
      });
      const data = await response.json();
      if (response.ok) {
        contactData();
        toast.success(data.msg);
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Show confirmation modal
  const handleDeleteClick = (id) => {
    setContactToDelete(id);
    setShowConfirm(true);
  };

  // Handle confirmation of deletion
  const handleConfirmDelete = () => {
    if (contactToDelete) {
      deleteContact(contactToDelete);
    }
    setShowConfirm(false);
  };

  // Handle cancel delete
  const handleCancelDelete = () => {
    setShowConfirm(false);
    setContactToDelete(null);
  };

  return (<>
    <div className="users-container">
      <h1 className="">Contacts/Messages</h1>
      <hr className="box-border" />
      <div className="table-responsive">
        <table className="table">
          <thead className='sticky-top contact-head'>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Message</th>
              {/* <th>Time</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((curCont, index) => (
              <tr key={index}>
                <td>{curCont.username}</td>
                <td>{curCont.email}</td>
                <td>{curCont.message}</td>
                {/* <td>{curUser.message}</td> */}
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteClick(curCont._id)}>
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <h5 className="text-dark">Are you sure you want to delete this contact?</h5>
            <button onClick={handleConfirmDelete} className="btn btn-primary">Yes, Delete</button>
            <button onClick={handleCancelDelete} className="btn btn-danger">Cancel</button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default AdminContacts;
