import PetsIcon from '@mui/icons-material/Pets';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessIcon from '@mui/icons-material/Business';
import PoolIcon from '@mui/icons-material/Pool';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Project = () => {
    return (
        <div className="flex justify-center py-32 bg-[#f8f8f8]">
            {/* Layout 12 cols, 10 working cols */}
            <div className="w-10/12 h-auto flex flex-col items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-secondary">
                    MY SHOWCASE
                </h1>
                <h1 className="text-2xl font-semibold text-primary">Spotlight project</h1>
                {/* Role cards */}
                <div className="flex flex-row gap-6 w-full justify-between">
                    {/* Role card 1 */}
                    <div className="flex flex-col gap-2 w-1/3 h-96 border-2 border-slate-200 rounded-xl 
                transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50 hover:border-secondary hover:-translate-y-2 bg-white">
                        <div className="rounded-full bg-secondary w-16 h-16 flex items-center justify-center m-4 
                    transition-all duration-300 hover:ring-4 hover:ring-primary/50">
                            <PetsIcon fontSize="large" style={{ color: "#ffffff" }} />
                        </div>
                        <h1 className="text-2xl font-bold text-primary px-4">
                            Dogs Park
                        </h1>
                        {/* ["React", "Flutter", "1C Enterprise", "Ale Pay"], */}
                        <Stack direction="row" spacing={1} className="px-4">
                            <Chip label="React" variant="outlined" />
                            <Chip label="Flutter" variant="outlined" />
                            <Chip label="1C ERP" variant="outlined" />
                            <Chip label="Ale Pay" variant="outlined" />
                        </Stack>
                        <p className="text-justify text-primary px-4">
                        The Dogs Park project is a community-oriented space designed for dogs and their owners to socialize and play. It features designated areas for small and large dogs, agility equipment for exercise. The park hosts regular events, including training workshops and social meetups, fostering a vibrant community of dog lovers.
                        </p>
                        <h1 className="font-semibold cursor-pointer text-primary px-4 hover:text-secondary">
                            See more ➝
                        </h1>
                    </div>
                    {/* Role card 2 */}
                    <div className="flex flex-col gap-2 w-1/3 h-96 border-2 border-slate-200 rounded-xl 
                transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50 hover:border-secondary hover:-translate-y-2 bg-white">
                        <div className="rounded-full bg-secondary w-16 h-16 flex items-center justify-center m-4 
                    transition-all duration-300 hover:ring-4 hover:ring-primary/50">
                            <LocalCafeIcon fontSize="large" style={{ color: "#ffffff" }} />
                        </div>
                        <h1 className="text-2xl font-bold text-primary px-4">
                            Coffee Roastery
                        </h1>
                        {/* ["React", "Flutter", "1C Enterprise"], */}
                        <Stack direction="row" spacing={1} className="px-4">
                            <Chip label="React" variant="outlined" />
                            <Chip label="Flutter" variant="outlined" />
                            <Chip label="1C ERP" variant="outlined" />
                        </Stack>
                        <p className="text-justify text-primary px-4">
                        An e-commerce platform dedicated to artisanal coffee roasting. This project showcases a range of coffee beans sourced from around the world, complete with detailed tasting notes and brewing recommendations. Customers can subscribe for regular deliveries or purchase one-time bags, with a focus on sustainability and direct trade practices.
                        </p>
                        <h1 className="font-semibold cursor-pointer text-primary px-4 hover:text-secondary">
                            See more ➝
                        </h1>
                    </div>
                    {/* Role card 3 */}
                    <div className="flex flex-col gap-2 w-1/3 h-96 border-2 border-slate-200 rounded-xl 
                transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50 hover:border-secondary hover:-translate-y-2 bg-white">
                        <div className="rounded-full bg-secondary w-16 h-16 flex items-center justify-center m-4 
                    transition-all duration-300 hover:ring-4 hover:ring-primary/50">
                            <NotificationsIcon fontSize="large" style={{ color: "#ffffff" }} />
                        </div>
                        <h1 className="text-2xl font-bold text-primary px-4">
                            CleverTap Implementation
                        </h1>
                        {/* ["CleverTap", "Flutter", "1C Enterprise"], */}
                        <Stack direction="row" spacing={1} className="px-4">
                            <Chip label="CleverTap" variant="outlined" />
                            <Chip label="Flutter" variant="outlined" />
                            <Chip label="1C ERP" variant="outlined" />
                        </Stack>
                        <p className="text-justify text-primary px-4">
                        An integration project with CleverTap, a leading customer engagement and analytics platform. This project involved implementing CleverTap’s SDK into a mobile application, enabling real-time user engagement through personalized notifications, targeted campaigns, and comprehensive analytics to optimize user retention and growth.
                        </p>
                        <h1 className="font-semibold cursor-pointer text-primary px-4 hover:text-secondary">
                            See more ➝
                        </h1>
                    </div>
                </div>

                {/* Role cards 2*/}
                <div className="flex flex-row gap-6 w-full justify-between">
                    {/* Role card 4 */}
                    <div className="flex flex-col gap-2 w-1/3 h-96 border-2 border-slate-200 rounded-xl 
                transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50 hover:border-secondary hover:-translate-y-2 bg-white">
                        <div className="rounded-full bg-secondary w-16 h-16 flex items-center justify-center m-4 
                    transition-all duration-300 hover:ring-4 hover:ring-primary/50">
                            <BusinessIcon fontSize="large" style={{ color: "#ffffff" }} />
                        </div>
                        <h1 className="text-2xl font-bold text-primary px-4">
                            Real Estate Platform
                        </h1>
                        {/* ["React", "Flutter", "1C Enterprise", "Python"], */}
                        <Stack direction="row" spacing={1} className="px-4">
                            <Chip label="React" variant="outlined" />
                            <Chip label="Flutter" variant="outlined" />
                            <Chip label="1C ERP" variant="outlined" />
                            <Chip label="Python" variant="outlined" />
                        </Stack>
                        <p className="text-justify text-primary px-4">
                        An integration project with CleverTap, a leading customer engagement and analytics platform. This project involved implementing CleverTap’s SDK into a mobile application, enabling real-time user engagement through personalized notifications, targeted campaigns, and comprehensive analytics to optimize user retention and growth.
                        </p>
                        <h1 className="font-semibold cursor-pointer text-primary px-4 hover:text-secondary">
                            See more ➝
                        </h1>
                    </div>
                    {/* Role card 5 */}
                    <div className="flex flex-col gap-2 w-1/3 h-96 border-2 border-slate-200 rounded-xl 
                transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50 hover:border-secondary hover:-translate-y-2 bg-white">
                        <div className="rounded-full bg-secondary w-16 h-16 flex items-center justify-center m-4 
                    transition-all duration-300 hover:ring-4 hover:ring-primary/50">
                            <PoolIcon fontSize="large" style={{ color: "#ffffff" }} />
                        </div>
                        <h1 className="text-2xl font-bold text-primary px-4">
                            Aquatics HUB
                        </h1>
                        {/* ["React", "Flutter", "Node", "1C Enterprise", "Python", "VN Pay"], */}
                        <Stack direction="row" spacing={1} className="px-4">
                            <Chip label="React" variant="outlined" />
                            <Chip label="Flutter" variant="outlined" />
                            <Chip label="1C ERP" variant="outlined" />
                            <Chip label="Python" variant="outlined" />
                            <Chip label="VN Pay" variant="outlined" />
                        </Stack>
                        <p className="text-justify text-primary px-4">
                        The Aquatic Hub is a modern facility focused on providing a variety of aquatic activities for all ages. It includes multiple swimming pools for lessons. The hub also emphasizes water safety education, offering programs that teach essential swimming skills and promote healthy, active lifestyles within the community.
                        </p>
                        <h1 className="font-semibold cursor-pointer text-primary px-4 hover:text-secondary">
                            See more ➝
                        </h1>
                    </div>
                    {/* Role card 6 */}
                    <div className="flex flex-col gap-2 w-1/3 h-96 border-2 border-slate-200 rounded-xl 
                transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50 hover:border-secondary hover:-translate-y-2 bg-white">
                        <div className="rounded-full bg-secondary w-16 h-16 flex items-center justify-center m-4 
                    transition-all duration-300 hover:ring-4 hover:ring-primary/50">
                            <TwoWheelerIcon fontSize="large" style={{ color: "#ffffff" }} />
                        </div>
                        <h1 className="text-2xl font-bold text-primary px-4">
                        Motorcycle Retail Store
                        </h1>
                        {/* ["React", "Python", "VN Pay", "SQLite"], */}
                        <Stack direction="row" spacing={1} className="px-4">
                            <Chip label="React" variant="outlined" />
                            <Chip label="Python" variant="outlined" />
                            <Chip label="VN Pay" variant="outlined" />
                            <Chip label="SQLite" variant="outlined" />
                        </Stack>
                        <p className="text-justify text-primary px-4">
                        An online retail store specializing in motorcycle parts and accessories. This project includes a user-friendly interface for browsing products, detailed descriptions, customer reviews, and a secure checkout process. The platform also offers a blog with maintenance tips, riding safety advice, and the latest industry news.
                        </p>
                        <h1 className="font-semibold cursor-pointer text-primary px-4 hover:text-secondary">
                            See more ➝
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;