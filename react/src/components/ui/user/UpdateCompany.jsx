import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    Avatar,
    Button,
} from "@material-tailwind/react";

export default function UpdateCompany() {
  return (
    <Card className="w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Update Company
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See all update company
                        </Typography>
                    </div>
                </div>
            </CardHeader>

            <CardBody className="md:flex md:justify-between items-center cursor-pointer hover:bg-blue-gray-400/10 rounded-xl">
                <Avatar variant="rounded" alt="image" src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnh5i88wcayi9b_tn" className=" md:w-[70px] md:h-[70px] w-32 h-32 overflow-clip mb-4 md:mb-4" />
                <div className=" mb-4 md:mb-4">
                    <p>Successful parcel delivery</p>
                    <p>Package VNPE1291039149 of order MD93368 has been successfully delivered to you.</p>
                    <p>15:55 / 01-03-2024</p>
                </div>
                <Button className=" h-fit">View Details</Button>
            </CardBody>

            <CardBody className="md:flex md:justify-between items-center cursor-pointer hover:bg-blue-gray-400/10 rounded-xl">
                <Avatar variant="rounded" alt="image" src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnh5i88wcayi9b_tn" className=" md:w-[70px] md:h-[70px] w-32 h-32 overflow-clip mb-4 md:mb-4" />
                <div className=" mb-4 md:mb-4">
                    <p>Successful parcel delivery</p>
                    <p>Package VNPE1291039149 of order MD93368 has been successfully delivered to you.</p>
                    <p>15:55 / 01-03-2024</p>
                </div>
                <Button className=" h-fit">View Details</Button>
            </CardBody>
        </Card>
  )
}
