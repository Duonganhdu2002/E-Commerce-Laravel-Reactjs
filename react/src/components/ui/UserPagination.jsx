import { useState, useEffect } from 'react';
import { fetchUserPagination } from '../../services/authService';

export default function Example() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getUserPagination(currentPage);
    }, [currentPage]);

    const getUserPagination = async (page) => {
        try {
            let res = await fetchUserPagination(page);
            if (res && res.data) {
                setData(res.data);
                setTotalPages(res.total_pages);
            }
        } catch (error) {
            console.error('Error fetching fields:', error);
        }
    };

    // console.log(data);
    // console.log(currentPage);
    // console.log(totalPages);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPageButtons = () => {
        const pagesToShow = 3;
        const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='w-[80%]'>
                {/* Hiển thị danh sách */}
                <div>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Username
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user) => (
                                <tr key={user.user_id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Hiển thị thanh phân trang */}
                <div>
                    <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-sm font-semibold"
                    >
                        First
                    </button>
                    {renderPageButtons().map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`${currentPage === page ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                } px-4 py-2 text-sm font-semibold`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 text-sm font-semibold"
                    >
                        Last
                    </button>
                </div>
            </div>
        </div>
    );
}
