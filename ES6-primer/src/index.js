//console.log("Starting ES6 and above");
import logger ,{appName as am,dummyfunction as df} from './tools.js'; 

logger ("starting ES6 and above with modularity");

logger ("welcome! The application name is "+ am + ". There is a function that returns "+ df()) ;
//notice the back tick before the welcome and at the end of the line
logger (`welcome! The application name is "${am}". There is a function that returns "${df()}".`)