"use client";

import { useRouter } from "next/navigation";

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className={""}>404 - Page Not Found</h1>
      <p className={""}>Oops! The page you are looking for does not exist.</p>
      <button className={"underline"} onClick={handleGoBack}>
        &larr; Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
