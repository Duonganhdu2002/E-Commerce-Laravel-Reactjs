import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { EyeIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = ["ID", "Full Name", "Description" , "Create at", "Details"];

const TABLE_ROWS = [
    {
        id: "1",
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "Smartphones",
        field: "Smartphone",
        date: "23/04/18",
        description: "abcdefgh jklmafdnelfe fl kwlfk kel flkw ekfw eklf we flkw fkle kw fklw kelfklwe fkwe fklwe flwke fwkle",
    },
    {
        id: "2",
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "Speakers",
        field: "Smartphone",
        date: "23/04/18",
        description: "abcdefgh jklmafdnelfe fl kwlfk kel flkw ekfw eklf we flkw fkle kw fklw kelfklwe fkwe fklwe flwke fwkle",
    },
    {
        id: "3",
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "Monitors",
        field: "Smartphone",
        date: "19/09/17",
        description: "abcdefgh jklmafdnelfe fl kwlfk kel flkw ekfw eklf we flkw fkle kw fklw kelfklwe fkwe fklwe flwke fwkle",
    },
    {
        id: "4",
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "Projectors",
        field: "Smartphone",
        date: "24/12/08",
        description: "abcdefgh jklmafdnelfe fl kwlfk kel flkw ekfw eklf we flkw fkle kw fklw kelfklwe fkwe fklwe flwke fwkle",
    },
    {
        id: "5",
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "Children Watches",
        field: "Smartphone",
        date: "04/10/21",
        description: "abcdefgh jklmafdnelfe fl kwlfk kel flkw ekfw eklf we flkw fkle kw fklw kelfklwe fkwe fklwe flwke fwkle",
    },
];


export default function CategoryList() {
    return (
        <Card className="w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Category list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See user about all categories
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" size="sm">
                            view all
                        </Button>
                        <Button className="flex items-center gap-3" size="sm">
                            <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add category
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ img, name, field, description, date, id }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {id}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={img} alt={name} size="sm" />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        Field: {field}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal w-52"
                                            >
                                                {description}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Details">
                                                <IconButton variant="text">
                                                    <EyeIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
