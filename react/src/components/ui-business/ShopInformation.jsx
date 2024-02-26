import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    ButtonGroup,
    Button,
} from "@material-tailwind/react";
import Profile from '../../assets/public/profile/thaicong.jpg';

export function ShopInformation() {
    return (
        <Card className="h-fit w-full">
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

                <div className="">
                    <div><p>Shop Name: Mr Beast Shop</p></div>
                    <div className=" flex justify-around">
                        <div className="flex items-center"><p>Shop logo:</p></div>
                        <div className=" w-[200px]"><img src={Profile} alt="" className="rounded-full"/></div>
                        <div className="flex items-center">
                            <div>
                                <li>Standard image sizes: Width 300px, Height 300px</li>
                                <li>Maximum file size: 2.0MB</li>
                                <li>Supported file formats: JPG, JPEG, PNG</li>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>

    );
}
