import React, { useEffect } from "react";
import { Loader, Login, Register } from "../components";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import {NavBar} from "../components/index"

const Join = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (user) navigate("/mentors");
  }, [user, loading]);

  return (
    <>
    <NavBar/>
      {loading ? (
        <Loader />
      ) : (
        <div className="pt-9">
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
