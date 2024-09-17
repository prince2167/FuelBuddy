export const data = [
  {
    id: 1,
    fullName: "Prince Kumar Singh",
    userName: "me_princesingh",
    avatar:
      "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=600",
    url: "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=600",

    description: " Mountains",
    comments: [
      {
        id: 1,
        name: "Jhon Doe",
        userName: "jhon_doe",
        avatar:
          "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=600",
        comment: "qwerty",
        replies: [
          {
            id: 1,
            name: "Jhon Doe",
            userName: "jhon_doe",
            avatar:
              "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=600",
            comment: "qwerty",
            replies: [],
          },
        ],
      },
    ],
    like: 10,
  },
];
