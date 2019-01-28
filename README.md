# JSON APIs

## Postman
JSON APIs by definition a just data, and because of that can feel a bit challenging to work with.  Thankfully, there are tools available to help us interact with an API, and dig deep into the data for a better understanding of how the API is organized.  One such tool is Postman.

### Install Instructions
Postman can be [downloaded from here](https://www.getpostman.com/downloads/).

Once downloaded, double click on the zipped file, and move the application to your Applications folder.


### Exploring an API
In this example, we're going to be exploring the excellent Japanese Anime API called "Jikan".

[Read the Jikan docs here](https://jikan.docs.apiary.io/#).

From the docs, we can find the base URL for the API is: ```https://api.jikan.moe/v3```

and if we use Postman to get that endpoint, we get some high level information:


```javascript
// GET: https://api.jikan.moe/v3
{
    "Author": "@irfanDahir",
    "Contact": "irfan@dahir.co",
    "JikanREST": "3.2",
    "JikanPHP": "2.6.1",
    "Website": "https://jikan.moe",
    "Docs": "https://jikan.docs.apiary.io",
    "GitHub": "https://github.com/jikan-me/jikan",
    "PRODUCTION_API_URL": "https://api.jikan.moe/v3/",
    "STATUS_URL": "https://status.jikan.moe"
}
```

Digging a little deeper into their docs, we can see that search is supported.  We can search 4 main categories, for any topic we're interested in.  A search URL is constructed like so:

    https://api.jikan.moe/v3/search/manga?q=naruto
    https://api.jikan.moe/v3/search/character?q=naruto

    //Use a '+' to represent whitespace in a query string.
    https://api.jikan.moe/v3/search/manga?q=dragon+ball

We Can also see that we can get all of the details of a Manga, Anime, Character, or Person by requesting their detail page like this:

    https://api.jikan.moe/v3/manga/42
    https://api.jikan.moe/v3/anime/194
    https://api.jikan.moe/v3/person/2398
    https://api.jikan.moe/v3/character/100


## Using Fetch to get Data in React
Fetch is a function built into javascript to pull data or files into our application from somewhere on the internet.  Fetch uses promises to handle the asynchronous requests.  In its simplest form, fetch works like this:

```Javascript
fetch(<url>).then((rawResponse)=>{
  //return the part of the response we're interested in
  return rawResponse.json()
}).then(parsedResponse) => {
  //do what we need to with the parsedResponse, a JS object in this case
})
```

So, for example on our Anime Index page, we need to make a request out to the Jikan api based on the user input to get a list of results to show to the user.  Let's take a look at doing this from within our sample application contructor:

```bash
cat -n src/pages/Topic.js |sed "7,29!d"
```
```result
:      7	  constructor(props){
:      8	    super(props)
:      9	    const{ match } = props
:     10	    const{ params } = match
:     11	    this.state = {
:     12	      type: params.type,
:     13	      topic: params.topic,
:     14	      loading: true,
:     15	      works: [],
:     16	    }
:     17
:     18	    fetch(`https://api.jikan.moe/v3/search/${params.type}?q=${params.topic}`)
:     19	    .then((result)=> result.json())
:     20	    .then((jsonBody)=>{
:     21	      const{ results } = jsonBody
:     22	      if(results){
:     23	        this.setState({ works: results, loading: false })
:     24	      }
:     25	    })
:     26	    .catch((e)=>{
:     27	      this.setState({loading: false})
:     28	    })
:     29	  }
```

* Line: 14 - Set a loading state, so the user knows to be patient while we fetch data.
* Line: 15 - We initialize state with an empty array
* Line: 18 - 28 - We make the Fetch request (GET by default) and handle the response
* Line: 26 - Each API will behave differently,  In this case, for the Jikan API, if no results are found, it returns a 404 response.  This is good for us, as we want to change behavior for the user in this situation.
