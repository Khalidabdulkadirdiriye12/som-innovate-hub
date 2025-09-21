import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";

const ClientsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Clients />
      </div>
      <Footer />
    </div>
  );
};

export default ClientsPage;