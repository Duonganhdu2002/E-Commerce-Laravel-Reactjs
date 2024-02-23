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
                </div>
            </div>
        </CardBody>
    </Card>
        
);}