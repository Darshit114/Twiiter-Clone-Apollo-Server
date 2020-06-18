const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/twitter", {
        useNewUrlParser: true 
});

const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    tweet: String,
    author: String
});

const tweetModel = mongoose.model("Tweet", tweetSchema);

module.exports = {

	getTweets: () => tweetModel.find().sort({ _id: -1 }),
	getTweet: _id => tweetModel.findOne({ _id }),
	createTweet: args => tweetModel(args).save(),
	deleteTweet: args => {
		const { _id } = args

		tweetModel.deleteOne({ _id }, error => {
			if (error) {
				console.log("Error Removing: ", error)
			}
		})

		return args
	},
	updateTweet: args => {
		const { _id, tweet } = args

		tweetModel.update(
			{ _id },
			{
				$set: { tweet }
			},
			{ upsert: true },
			error => {
				if (error) {
					console.log("Error Updating: ", error)
				}
			}
		)

		args.author = "User123" // temporary user

		return args
	}
}