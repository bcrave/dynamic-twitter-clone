({
  plugins: ["jsdom-quokka-plugin"],
});

const user1 = {
  userName: "@elonmusk",
  displayName: "Elon Musk",
  joinedDate: "June 2009",
  followingCount: 103,
  followerCount: 47900000,
  avatarURL: "assets/elonmusk.jpg",
  coverPhotoURL: "assets/elonmusk-cover.jpeg",
  tweetCount: 13600,
  tweets: [
    {
      text: "I admit to judging books by their cover",
      timestamp: "2/10/2021 00:01:20",
      commentCount: 5200,
      retweetCount: 7700,
      likeCount: 65200,
    },
    {
      text: "Starship to the moon",
      timestamp: "2/09/2021 18:37:12",
      commentCount: 8500,
      retweetCount: 11200,
      likeCount: 70000,
    },
    {
      text: "Out on launch pad, engine swap underway",
      timestamp: "2/09/2021 12:11:51",
      commentCount: 9000,
      retweetCount: 12000,
      likeCount: 100000,
    },
  ],
};

const user2 = {
  userName: "@BillGates",
  displayName: "Bill Gates",
  joinedDate: "June 2009",
  followingCount: 274,
  followerCount: 53800000,
  avatarURL: "assets/billgates.jpg",
  coverPhotoURL: "assets/billgates-cover.jpeg",
  tweetCount: 10500,
  tweets: [
    {
      text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
      timestamp: "2/10/2021 00:01:20",
      commentCount: 4200,
      retweetCount: 6900,
      likeCount: 66600,
    },
    {
      text: "Should I start tweeting memes? Let me know in a comment.",
      timestamp: "2/09/2021 18:37:12",
      commentCount: 5800,
      retweetCount: 8900,
      likeCount: 74700,
    },
    {
      text: "In 2020, I read a book every hour.",
      timestamp: "2/09/2021 12:11:51",
      commentCount: 7200,
      retweetCount: 1080,
      likeCount: 69000,
    },
  ],
};

const userParams = new URLSearchParams(window.location.search);
const user = userParams.get("user");

const headerDisplay = document.getElementById("header-display");
const profileImages = document.querySelector(".profile-images");
const profileDisplay = document.getElementById("profile-display");
const feed = document.querySelector(".feed");
const tweet = document.querySelector(".tweet");

/* Templating */
headerDisplay.innerHTML = `
  <h2 class="display-name">
    ${user === "user1" ? user1.displayName : user2.displayName}
    <span>
      <i class="fas fa-certificate"></i>
    </span>
  </h2>
  <p class="sub-info">${
    user === "user1" ? user1.tweetCount / 1000 : user2.tweetCount / 1000
  }K Tweets</p>
`;
profileImages.style.backgroundImage = `url(${
  user === "user1" ? user1.coverPhotoURL : user2.coverPhotoURL
})`;
profileImages.innerHTML = `<img src="${
  user === "user1" ? user1.avatarURL : user2.avatarURL
}" alt="${user == "user1" ? user1.displayName : user2.displayName}" />`;
profileDisplay.innerHTML = `
  <h2 class="display-name">
    ${user === "user1" ? user1.displayName : user2.displayName}
    <span>
      <i class="fas fa-certificate"></i>
    </span>
  </h2>
  <div class="sub-info">
    <div>
      <p class="username">${
        user === "user1" ? user1.userName : user2.userName
      }</p>
    </div>
    <div class="join-date">
      <i class="far fa-calendar-alt"></i>
      <p>Joined ${user === "user1" ? user1.joinedDate : user2.joinedDate}</p>
    </div>
    <div class="follower-info">
      <p>
        <span class="following">${
          user === "user1" ? user1.followingCount : user2.followingCount
        }</span>
        Following
        <span class="followers">${
          user === "user1"
            ? user1.followerCount / 1000000
            : user2.followerCount / 1000000
        }M</span>
        Followers
      </p>
    </div>
  </div>
`;

for (let i = 0; i < user1.tweets.length; i++) {
  const tweet = document.createElement("div");
  tweet.classList.add("tweet");
  tweet.innerHTML = `
    <div class="tweet-image">
      <img src="${user === "user1" ? user1.avatarURL : user2.avatarURL}" alt="${
    user === "user1" ? user1.displayName : user2.displayName
  }" />
    </div>
    <div class="tweet-content">
      <div class="tweet-info">
        <div class="tweet-info-left">
          <h3>${user === "user1" ? user1.displayName : user2.displayName}</h3>
          <i class="fas fa-certificate"></i>
          <p class="username">${
            user === "user1" ? user1.userName : user2.userName
          }</p>
          &middot;
          <p>${
            user === "user1"
              ? user1.tweets[i].timestamp.slice(0, 9)
              : user2.tweets[i].timestamp.slice(0, 9)
          }</p>
        </div>
        <div class="tweet-info-right">&bull; &bull; &bull;</div>
      </div>
      <div class="tweet-message">
        <p>${user === "user1" ? user1.tweets[i].text : user2.tweets[i].text}</p>
      </div>
      <ul class="tweet-actions">
        <li>
          <i class="far fa-comment"></i>
          <p>${
            user === "user1"
              ? user1.tweets[i].commentCount / 1000
              : user2.tweets[i].commentCount / 1000
          }K</p>
        </li>
        <li>
          <i class="fas fa-retweet"></i>
          <p>${
            user === "user1"
              ? user1.tweets[i].retweetCount / 1000
              : user2.tweets[i].retweetCount / 1000
          }K</p>
        </li>
        <li>
          <i class="far fa-heart"></i>
          <p>${
            user === "user1"
              ? user1.tweets[i].likeCount / 1000
              : user2.tweets[i].likeCount / 1000
          }K</p>
        </li>
        <li><i class="fas fa-share-square"></i></li>
      </ul>
  </div>
  `;
  feed.append(tweet);
}
