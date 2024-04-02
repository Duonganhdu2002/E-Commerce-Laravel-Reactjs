import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getRevenueByMonth } from "../../services/revenue";
import { useSelector } from 'react-redux'

const chartConfig = {
    type: "line",
    height: 240,
    series: [
        {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#020617"],
        stroke: {
            lineCap: "round",
            curve: "smooth",
        },
        markers: {
            size: 0,
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

export default function Graph1() {

    const user = useSelector((state) => state.seller.seller.user_id);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let res = await getRevenueByMonth(user)
            setData(res)
        }
        fetchData()
    }, [])

    // Chuyển đổi dữ liệu thành mảng để sử dụng trong biểu đồ
    const chartData = Object.values(data);

    // Tạo mảng categories cho trục x của biểu đồ
    const categories = Object.keys(data).map(month => {
        switch (parseInt(month)) {
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "Apr";
            case 5:
                return "May";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sep";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            case 12:
                return "Dec";
            default:
                return "";
        }
    });

    // Thay đổi chartConfig để sử dụng dữ liệu và categories mới
    const updatedChartConfig = {
        ...chartConfig,
        series: [
            {
                name: "Sales",
                data: chartData,
            },
        ],
        options: {
            ...chartConfig.options,
            xaxis: {
                ...chartConfig.options.xaxis,
                categories: categories,
            },
        },
    };

    return (
        <div>
            <Card>
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                >
                    <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                        <Square3Stack3DIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Line Chart
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="max-w-sm font-normal"
                        >
                            Chart displaying 12-month revenue
                        </Typography>
                    </div>
                </CardHeader>
                <CardBody className="px-2 pb-0">
                    <Chart {...updatedChartConfig} />
                </CardBody>
            </Card>
        </div>
    );
}
