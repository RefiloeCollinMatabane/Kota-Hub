import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import About from "../components/About";
import Service from "../components/Service";
const Index = () => {
  return (
    <Layout pageTitle="KOTA HUB">
      <Header />
      <Feature/>
      <Service/>
      <About/>
      <Hero/>
      
    </Layout>
    
  )
}
export default Index;