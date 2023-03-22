import React from "react";

const commentsData = [
  {
    name: "Tangudu Srinivasu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tangudu Srinivasu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Tangudu Srinivasu",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Tangudu Srinivasu",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Tangudu Srinivasu",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Tangudu Srinivasu",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Tangudu Srinivasu",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Tangudu Srinivasu",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Tangudu Srinivasu",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tangudu Srinivasu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tangudu Srinivasu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tangudu Srinivasu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Tangudu Srinivasu",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="bg-gray-200 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-3 border border-l-black ml-3 rounded-lg bg-gray-300">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-1 p-3 w-[67%] bg-gray-100 rounded-lg">
      <h1 className="font-bold text-xl">Comments:</h1>
      {/* <Comment data={commentsData[0]}/> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
