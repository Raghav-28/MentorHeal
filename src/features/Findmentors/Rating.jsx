import Rating from "@mui/material/Rating";

export default function BasicRating({ rating }) {
  return (
    <>
      <Rating name="read-only" precision={0.5} value={rating} readOnly />
    </>
  );
}
