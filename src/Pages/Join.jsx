import React, { useEffect } from "react";
import { Loader, Login, Register } from "../components";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const Join = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (user) navigate("/mentors");
  }, [user, loading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          Join
          <Login />
          Or
          <br />
          <Register />
        </div>
      )}
    </>
  );
};

export default Join;
