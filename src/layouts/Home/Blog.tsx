import Blog1 from "../../assets/Blog/blog1.jpg";
import Blog2 from "../../assets/Blog/blog2.jpg";
import Blog3 from "../../assets/Blog/blog3.jpg";
import Author from "../../assets/Home/jasmine.jpeg";

const Blog = () => {
    return (
        <div className="flex justify-center pt-32">
            {/* Layout 12 cols, 10 working cols */}
            <div className="w-10/12 h-auto flex flex-col items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-secondary">
                    STATE-OF-THE-ART BLOG
                </h1>
                <h1 className="text-2xl font-semibold text-primary">Technical blog</h1>
                {/* Blog cards */}
                <div className="flex flex-row gap-6 w-full justify-between">
                    {/* Blog 1 */}
                    <div className="flex flex-col gap-2 w-1/3 h-auto group hover:cursor-pointer">
                        <img
                            src={Blog1}
                            alt="Blog1"
                            className="w-full h-auto object-fill rounded-xl transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div className="flex flex-row items-center">
                            <img
                                src={Author}
                                alt="Author"
                                className="w-1/5 h-auto object-fill rounded-xl"
                            />
                            <h1 className="text-lg font-semibold text-primary">
                                Thuong Trinh Van
                            </h1>
                        </div>
                        <h1 className="text-2xl font-bold text-primary group-hover:text-secondary">
                            Breaking Down the Basics of Cloud Computing
                        </h1>
                        <p className="text-justify text-primary">
                            Understanding Cloud Infrastructure and Its Role in Modern Tech Solutions
                        </p>
                        <h1 className="font-semibold cursor-pointer text-primary group-hover:text-secondary">
                            Read more ➝
                        </h1>
                    </div>
                    {/* Blog 2 */}
                    <div className="flex flex-col gap-2 w-1/3 h-auto group hover:cursor-pointer">
                        <img
                            src={Blog2}
                            alt="Blog2"
                            className="w-full h-auto object-fill rounded-xl transition-transform duration-300 transform hover:scale-105"
                        />
                        <div className="flex flex-row items-center">
                            <img
                                src={Author}
                                alt="Author"
                                className="w-1/5 h-auto object-fill rounded-xl"
                            />
                            <h1 className="text-lg font-semibold text-primary">
                                Thuong Trinh Van
                            </h1>
                        </div>
                        <h1 className="text-2xl font-bold text-primary group-hover:text-secondary">
                            The Future of Artificial Intelligence in Everyday Life
                        </h1>
                        <p className="text-justify text-primary">
                            How AI is Transforming Industries, from Healthcare to Finance now a day.
                        </p>
                        <h1 className="font-semibold cursor-pointer text-primary group-hover:text-secondary">
                            Read more ➝
                        </h1>
                    </div>
                    {/* Blog 3 */}
                    <div className="flex flex-col gap-2 w-1/3 h-auto group hover:cursor-pointer">
                        <img
                            src={Blog3}
                            alt="Blog3"
                            className="w-full h-auto object-fill rounded-xl transition-transform duration-300 transform hover:scale-105"
                        />
                        <div className="flex flex-row items-center">
                            <img
                                src={Author}
                                alt="Author"
                                className="w-1/5 h-auto object-fill rounded-xl"
                            />
                            <h1 className="text-lg font-semibold text-primary">
                                Thuong Trinh Van
                            </h1>
                        </div>
                        <h1 className="text-2xl font-bold text-primary group-hover:text-secondary">
                            The Evolution of Technology: From Web 1.0 to Web 3.0
                        </h1>
                        <p className="text-justify text-primary">
                            A Journey Through the Key Innovations Shaping the Internet of Tomorrow
                        </p>
                        <h1 className="font-semibold cursor-pointer text-primary group-hover:text-secondary">
                            Read more ➝
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center bg-secondary w-1/8 p-4 rounded-xl">
                    <h1 className="font-semibold cursor-pointer text-white">
                        View all blog
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Blog;