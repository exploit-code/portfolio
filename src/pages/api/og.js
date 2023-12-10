import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const handler = (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "BUG_DEV";

    const imageContent = (
      <div
        style={{
          backgroundColor: "black",
          backgroundSize: "150px 150px",
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <svg
            stroke="currentColor"
            fill="white"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="200px"
            width="200px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 16C17.6569 16 19 17.3431 19 19C19 20.6569 17.6569 22 16 22C14.3431 22 13 20.6569 13 19C13 17.3431 14.3431 16 16 16ZM6 12C8.20914 12 10 13.7909 10 16C10 18.2091 8.20914 20 6 20C3.79086 20 2 18.2091 2 16C2 13.7909 3.79086 12 6 12ZM14.5 2C17.5376 2 20 4.46243 20 7.5C20 10.5376 17.5376 13 14.5 13C11.4624 13 9 10.5376 9 7.5C9 4.46243 11.4624 2 14.5 2Z"></path>
          </svg>
        </div>
        <div
          style={{
            fontSize: 65,
            fontStyle: "normal",
            color: "white",
            marginTop: 8,
            textAlign: "center",
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </div>
      </div>
    );

    return new ImageResponse(imageContent, {
      width: 1200,
      height: 630,
    });
  } catch (e) {
    console.error(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};

export default handler;
