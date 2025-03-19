import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [uData, setUserData] = useState("");
  const [service, setServices] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [Token, setToken] = useState(localStorage.getItem("token"));

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const authToken = `Bearer ${Token}`;
  const isLoggedIn = !!Token;

  // Logout user
  const LogoutUser = () => {
    setToken(null);
    setUserData("");
    localStorage.removeItem("token");
  };

  // JWT_AUTHENTICATION for UserData
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.SERVER_URL}/api/auth/user`, {
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
      }
    } catch (error) {
      console.error("Error in Fetching Data!", error);
    } finally {
      setIsLoading(false); // Ensure loading is stopped even on error
    }
  };

  // Fetching Services Data
  const serviceFetch = async () => {
    try {
      const response = await fetch(`${process.env.SERVER_URL}/api/auth/services`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setServices(data.message);
        console.log(data.message);
      }
    } catch (error) {
      console.error("Error in Fetching Data!", error);
    }
  };

  // useEffect for token change: fetch user data and services whenever Token changes
  useEffect(() => {
    if (Token) {
      userAuthentication(); // Fetch user data when Token exists
    } else {
      setUserData(""); // Clear user data if Token is removed (logged out)
    }
    serviceFetch(); // Fetch services when Token changes or when page loads
  }, [Token]); // Dependency on Token so effect runs when Token changes

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

export const useAuth = () => {
  return useContext(AuthContext);
};
