import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    ButtonGroup,
    Button,
} from "@material-tailwind/react";

export function ShopInformation() {
return (
    <Card classname="h-fit w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-4 flex items-center justify-between gap-8 ml-2">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        Shop Information
                    </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                        View Shop status and update your Shop profile
                    </Typography>
                </div>
            </div>
        </CardHeader>
        <CardBody>
            <div className="flex mt-4 border-b border-gray-900/10 mb-6 ">
                <div className="mr-6">
                    <a href="#" className="text-lg text-black hover:text-gray-800 border-b-2 border-transparent hover:border-black transition duration-300">Basic information</a>
                </div>
                <div className="mr-6">
                    <a href="#" className="text-lg text-black hover:text-gray-800 border-b-2 border-transparent hover:border-black transition duration-300">Identification information</a>
                </div>
            </div>

            <div className="flex justify-between ">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        Basic Information
                    </Typography>
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Button variant="outlined" size="sm">
                       See
                    </Button>
                    <Button variant="outlined" size="sm">
                        Edit
                    </Button>
                </div>
            </div>

        </CardBody>
    </Card>
        
);}