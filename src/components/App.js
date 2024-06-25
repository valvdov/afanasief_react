import '../App.css';
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
      <>
          <Header/>
          <Main/>
          {/*<Switch>*/}
          {/*    <Route path="/" exact component={Home} />*/}
          {/*    <Route path="/chaconne" component={Chaconne} />*/}
          {/*    <Route path="/biography" component={Biography} />*/}
          {/*    <Route path="/exhibitions" component={Exhibitions} />*/}
          {/*    <Route path="/gallery" component={Gallery} />*/}
          {/*    <Route path="/video" component={Video} />*/}
          {/*    <Route path="/demo" component={Demo} />*/}
          {/*    <Route path="/book" component={Book} />*/}
          {/*    <Route path="/contacts" component={Contacts} />*/}
          {/*</Switch>*/}
          <Footer/>
      </>
  );
}

export default App;
