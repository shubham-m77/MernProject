import React, { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import { Link,useParams,useNavigate } from 'react-router-dom';
import {useAuth} from "../store/auth.jsx";
import Footer from '../components/Footer.jsx';
const AdminUpdate = () => {
      const {authToken}=useAuth();
      const navigate=useNavigate();
    //   const [data,setData]=useState("");
    const [data,setData]=useState({
        username:"",
        email:"",
        mobile:"",
        });

        const params=useParams();
        // getting singleUser Data
        const getUserData= async()=> {
            try {
              const response=await fetch(`http://localhost:2000/admin/users/${params.id}`,{
                method:"GET",
                headers:{
                  "Authorization":authToken
                }
              });
              const data=await response.json();
              setData(data);
            } catch (error) {
              console.log(error);
            }
       }

       useEffect(()=>{
        getUserData();
       },[params.id]);

       const handleInput = async (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      };

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    try {
    const response=await fetch(`http://localhost:2000/admin/users/update/${params.id}`,{
          method:"PATCH",
          headers:{
            "Content-Type": "application/json",
            "Authorization":authToken,
            
          },
          body:JSON.stringify(data),
        });
        // const data=await response.json();
        if(response.ok){
          toast.success("User Updated"); 
          navigate("/admin/users/");
        }
        else{
          toast.error("Error in Updation"); 
        } 
} catch (error) {
    console.log(error);
}
finally {
  setLoading(false); // Hide loading state
}
    };
  return (<>
    <div className='update-container'>
      <div className="px-3 bg-dark rounded pt-2 pb-1 update-form">
                      <h2 className="login-header text-light mt-1">Update User</h2><hr className='box-border'/><br />
                      <form onSubmit={handleSubmit} className='login-form'>
                      <div className="form-input pt-3"><label htmlFor="username">Username</label><br />
                      <input type="text" name='username' value={data.username} onChange={handleInput}  autoComplete='off' className='form-control'/>
                      </div>
      
                      <div className="form-input pt-3"><label htmlFor="email">Email</label><br />
                      <input type="email" name='email' value={data.email} onChange={handleInput} className='form-control'/>
                      </div>
      
                      <div className="form-input pt-3"><label htmlFor="password">Mobile</label><br />
                      <input type="number" name='mobile' value={data.mobile} onChange={handleInput} autoComplete='off' className='form-control'/>
                      </div>

                      
                      <div className="login-btn py-3 d-flex align-items-center justify-content-center">
                      <button type="submit" className='btn btn-primary rounded-pill signup-btn' > {loading ? 'Updating...' : 'Update'} <i className="fa-solid fa-arrow-right"></i></button></div>
                      </form>
                    
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminUpdate
