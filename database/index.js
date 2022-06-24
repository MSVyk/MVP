const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');, useCreateIndex: true
mongoose.connect('mongodb://localhost/themes', { useNewUrlParser: true, useUnifiedTopology: true});

let themeSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  author: String,
  url: String,
  used: Number,
  isFavorite: Boolean
});

let Theme = mongoose.model('Theme', themeSchema);
let save = (themes) => {
  // console.log('^^^^^^^^^^^^^^^^TIS IS WORKING!^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // console.log('!!!!!!!!!!*********^^^^^^^^%%%%%%%%%%%%', repos);
  let saving = themes.map((theme) => {
    console.log(theme)
    return Theme.findOneAndUpdate({name: theme.name}, {
        repo: theme.name,
        author: theme.owner.name,
        used: theme.used,
        url: theme.html_url,
        isFavorite: false
    },
    {
      // new: true,
      upsert: true
    })
  });
  return Promise.all(saving);
}

let toggleOne = (repo) => {

  // console.log('I AM HERE>>>>>>>> ', Repo.find({name}), '<<<<<<<<<<< IN DB')
  let toggled = Theme.findOne({repo}).exec()
    return toggled.then((repo1) => {
      console.log(repo1.isFavorite);
      return repo1.isFavorite ?
      repo1.update({isFavorite: false}) : repo1.update({isFavorite: true})
      }
    )
}

let getFavorits = () => {
  return Theme.find({isFavorite: true}).sort({ watch_count: 'asc' }).limit(25);
}

let get = () => {
  return Theme.find({isFavorite: false}).sort({ watch_count: 'asc' }).limit(25);
}

let deleteOne = (name) => {
  console.log(">>>>>>>>>>>>",name, "TO BE DELETED <<<<<<<<<<<<<")
  return Theme.deleteOne({ name: name });
}

console.log('Database conected!')

module.exports.getFavorits = getFavorits;
module.exports.toggleOne = toggleOne;
module.exports.deleteOne = deleteOne;
module.exports.get = get;
module.exports.save = save;