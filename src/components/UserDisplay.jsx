import '../index.css';


function UserDisplay({ username, fullName, profileImage, subscriberCount, bio }) {
    return (
      <div className="max-w-md mx-auto my-5 border-black border-4 rounded-lg p-4 bg-white">
        <div className="flex items-center">
          <img
            src={profileImage}
            alt={`${username}'s profile`}
            className="rounded-full h-16 w-16 object-cover mr-4"
          />
          <div className="flex flex-col flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">{fullName}</h3>
                <p className="text-gray-600">@{username}</p>
                <p className="text-gray-500">Subscribers: {subscriberCount}</p>
              </div>
              <p className="text-gray-700 px-4">{bio}</p>

              <div className="flex justify-center space-x-4 mt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Message</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">Block</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">♥</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

export default UserDisplay;
