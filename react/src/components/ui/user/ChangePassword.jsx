import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Input,
} from "@material-tailwind/react";

export default function ChangePassword() {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className=" flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Set Password
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            For your account&apos;s security, do not share your password with anyone else
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <div className="mb-4">
                    <Input label="Password" />
                </div>
                <div>
                    <Input label="Confirm Password" />
                </div>
            </CardBody>
            <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 gap-8">
                <Button className="flex items-center h-12" size="sm">
                    Change Password
                </Button>
            </CardFooter>
        </Card>
    )
}
