import MapContainer from '../containers/MapContainer';

const About = () => {
    return (
        <div className="brew-hist">
            <h1>Louisiana Craft History</h1>
            
                <p>  
                    Louisiana has always been known for its culinary delights, but we weren't always known for our craft beers.
                    Despite having a city that is known world wide for its drinking scene, the state as a whole took a while to hop on the craft brew trend.
                    Abita Brewery was the first and only craft brewery we had in the state, it was around before the term "craft" was even coined. Founded in 1986, Abita showed the state just what local brewers had to offer. 
                    Many Louisianians’ first taste of craft beer came from Abita. 
                </p>
                <p>
                    We've come a long way since then. The pelican state is now home to 30 breweries, each unique in their efforts, yet similar in their quests to create flavorful beers that pay tribute to Louisiana’s culinary traditions. For a while, it seemed most breweries were located in New Orleans, but over the last decade, we've seen craft breweries pop up outside of the bustling cities. 
                    In the Acadiana region, Parish Brewery Company in Broussad and Bayou Teche in Arnaudville represent the soul of cajun country.   
                    Central Louisiana is home to one of the newest breweries in the state, Broken Wheel Brewery, located in Marksville. Just north of Lake Ponchartrain, Chafunkta Brewing Company and Old Rail Brewing have given the Northshore more options, after only having Abita for so long.
                    North Louisiana has become the best craft beer destinations in the state, with Great Raft Brewing and Red River in Shreveport, and Utility Brewing in Ruston.
                    And of course, there's New Orleans. Boasting a craft brewery scene made up of big hitters like Urban South Brewing, Second Line Brewery, and NOLA Breweing Company.
                </p>
                <p>
                    Everywhere you turn in South Louisiana you find more and more craft beer these days. Homebrew clubs seem to have record membership and our craft breweries are multiplying. 
                    The use of Louisiana ingredients from Steen’s cane syrup, passion fruit and Pontchatoula strawberries, to sweet potatoes adds even more to our emerging craft beer culture. 
                    Soon Louisiana will not only be known as a food- lover’s paradise, but we’ll stand out as a craft beer haven as well.
                </p>
            <MapContainer />                
        </div>
    )
}



//3 stateless
export default About;

