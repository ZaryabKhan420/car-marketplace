import { Conf } from "../../conf/Conf";
import axios from "axios";
const formatResult = (res) => {
  let result = [];
  let finalResult = [];
  res.forEach((item) => {
    const listingId = item.carListing.id;
    if (!result[listingId]) {
      result[listingId] = {
        car: item.carListing,
        images: [],
      };
    }

    if (item.carImages) {
      result[listingId].images.push(item.carImages);
    }
  });

  result.forEach((item) => {
    finalResult.push({
      ...item.car,
      images: item.images,
    });
  });
  return finalResult;
};
export default formatResult;

const createSendBirdUser = async (userId, nickName, profileUrl) => {
  try {
    return axios.post(
      `https://api-${Conf.VITE_SENDBIRD_APPLICATION_ID}.sendbird.com/v3/users`,
      {
        user_id: userId,
        nickname: nickName,
        profile_url: profileUrl,
        issue_access_token: false,
      },
      {
        headers: {
          "Api-Token": Conf.VITE_SENDBIRD_API_TOKEN,
          "Content-type": "application / json",
        },
      }
    );
  } catch (error) {
    if (error.code === 400202) {
      console.error(
        "Error: User ID violates unique constraint. User already exists."
      );
    } else {
      console.error("An error occurred while creating the user:", error);
    }
  }
};

const createSendBirdChannel = (users, title) => {
  return axios.post(
    `https://api-${Conf.VITE_SENDBIRD_APPLICATION_ID}.sendbird.com/v3/group_channels`,
    {
      user_ids: users,
      is_distinct: true,
      name: title,
    },
    {
      headers: {
        "Api-Token": Conf.VITE_SENDBIRD_API_TOKEN,
        "Content-type": "application/json",
      },
    }
  );
};

export { createSendBirdUser, createSendBirdChannel };
