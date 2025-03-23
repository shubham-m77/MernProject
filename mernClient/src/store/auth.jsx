import { createContext, useContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [uData, setUserData] = useState(null); // Better to initialize as null, assuming it's an object
  const [service, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Token, setToken] = useState(localStorage.getItem("token"));

  // Store token in localStorage and state
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };
const API_URI=process.env.SERVER_URL || "https://shubh-graphix.onrender.com";
  const authToken = `Bearer ${Token}`;
  const isLoggedIn = !!Token;

  // Logout user function
  const LogoutUser = () => {
    setToken(null);
    setUserData(null);
    localStorage.removeItem("token");
  };

  // Fetch user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URI}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authToken,
        },
      });

      if (response.ok) {
        const data = await response.json(); // Wait for the json response
        setUserData(data.userData); // Set the user data to state
      } else {
        console.error("Failed to fetch user data");
        setUserData(null); // Reset user data if fetch fails
      }
    } catch (error) {
      console.error("Error in Fetching Data!", error);
      setUserData(null); // Reset user data if fetch fails
    } finally {
      setIsLoading(false); // Ensure loading is stopped even on error
    }
  };

  // Fetch services data
  const serviceFetch = async () => {
    try {
      const response = await fetch(`${API_URI}/api/auth/services`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data.message);
        console.log(data.message);
      } else {
        console.error("Failed to fetch services");
        setServices([]); // Reset services if fetch fails
      }
    } catch (error) {
      console.error("Error in Fetching Services!", error);
      setServices([]); // Reset services if fetch fails
    }
  };

  useEffect(() => {
    if (Token) {
      userAuthentication(); 
    } else {
      setUserData(null); 
    }
    serviceFetch(); 
  }, [Token]); 

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        LogoutUser,
        isLoggedIn,
        uData,
        service,
        authToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
