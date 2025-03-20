"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="fixed inset-0 flex items-center justify-center p-5 w-full">
          <div className="text-center">
            <div className="inline-flex rounded-full bg-red-200 p-4">
              <svg className="w-16 h-16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g data-name="Layer 2">
                  <path
                    d="M22.7 28H9.3a6.25 6.25 0 0 1-5.47-3.15 6.15 6.15 0 0 1 0-6.22l6.73-11.51a6.3 6.3 0 0 1 10.88 0l6.71 11.51a6.15 6.15 0 0 1 0 6.22A6.25 6.25 0 0 1 22.7 28ZM16 6a4.24 4.24 0 0 0-3.71 2.12L5.58 19.64a4.15 4.15 0 0 0 0 4.21A4.23 4.23 0 0 0 9.3 26h13.4a4.23 4.23 0 0 0 3.73-2.15 4.15 4.15 0 0 0 0-4.21L19.71 8.12A4.24 4.24 0 0 0 16 6Z"
                    fill="#e7000b"
                    className="fill-000000"
                  />
                  <path
                    d="M16 12a.54.54 0 0 0-.44.22.52.52 0 0 0-.1.48l.54 2.18.54-2.18a.52.52 0 0 0-.1-.48A.54.54 0 0 0 16 12Z"
                    fill="none"
                  />
                  <path
                    d="M18 11a2.56 2.56 0 0 0-4 0 2.5 2.5 0 0 0-.46 2.19L15 19.24a1 1 0 0 0 1.94 0l1.51-6.06A2.5 2.5 0 0 0 18 11Zm-1.46 1.7L16 14.88l-.54-2.18a.52.52 0 0 1 .1-.48.55.55 0 0 1 .88 0 .52.52 0 0 1 .1.48Z"
                    fill="#e7000b"
                    className="fill-000000"
                  />
                  <circle
                    cx={16}
                    cy="22.5"
                    r="1.5"
                    fill="#e7000b"
                    className="fill-000000"
                  />
                </g>
                <path d="M0 0h32v32H0z" fill="none" />
              </svg>
            </div>
            <h2 className="mt-5 text-[36px] font-bold lg:text-[50px]">
              Something Went Wrong
            </h2>
            <p className="mt-5 lg:text-lg">
              Oops something went wrong. Try to refresh this page or <br /> feel
              free to contact us if the problem persists.
            </p>
            <Button className="my-10" onClick={() => reset()}>
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
