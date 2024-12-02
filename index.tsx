import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import DashboardContent from '../../components/DashboardContent';

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <DashboardContent />
            </div>
        </div>
    );
};

export default DashboardPage;
