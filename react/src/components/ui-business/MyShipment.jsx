import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
    Chip,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon, MagnifyingGlassIcon, UserCircleIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function MyShipment() {
    return (
        <div className=''>
            <div className=' space-y-8'>
                    <Input
                        className=' bg-white shadow-lg'
                        label="Search"
                        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />

                <div className="flex flex-wrap justify-center space-x-4 space-y-10 mb-12">
                    <Card className='w-full lg:w-1/2 2xl:w-1/3 px-2 mb-4'>
                        <CardHeader className=' flex items-center justify-around h-12'>
                            <div className='flex space-x-2'>
                                <p>Cargo ID:</p>
                                <p className=' font-bold text-gray-900'>#1266769</p>
                            </div>
                            <div className=' flex space-x-2'>
                                <Chip color="green" value="delivery" />
                                <EllipsisVerticalIcon className=' w-6 cursor-pointer' />
                            </div>
                        </CardHeader>
                        <CardBody className='pb-0'>
                            <div className="">
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                06.05.2024
                                            </Typography>
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                Anytown, NY 12345
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography variant="small" color="gray" className="font-normal  text-gray-600">
                                                8:00AM
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                                123 Main St.
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                06.05.2024
                                            </Typography>
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                Anytown, NY 12345
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography variant="small" color="gray" className="font-normal  text-gray-600">
                                                8:00AM
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                                123 Main St.
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                06.05.2024
                                            </Typography>
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                Anytown, NY 12345
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography variant="small" color="gray" className="font-normal  text-gray-600">
                                                8:00AM
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                                123 Main St.
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                        </CardBody>
                        <CardFooter className='flex justify-between border-t-2'>
                            <div className='flex items-center space-x-2'>
                                <div><UserCircleIcon className='w-14' /></div>
                                <div>
                                    <p className=' font-semibold text-lg'>Thoshon Eve</p>
                                    <p className=' text-base'>Client</p>
                                </div>
                            </div>
                            <PhoneIcon className=' w-6 space-x-2' />
                        </CardFooter>
                    </Card>

                    <Card className=' w-full lg:w-1/2 2xl:w-1/3 px-2 mb-4'>
                        <CardHeader className=' flex items-center justify-around h-12'>
                            <div className='flex space-x-2'>
                                <p>Cargo ID:</p>
                                <p className=' font-bold text-gray-900'>#1266769</p>
                            </div>
                            <div className=' flex space-x-2'>
                                <Chip color="yellow" value="pick-up" />
                                <EllipsisVerticalIcon className=' w-6 cursor-pointer' />
                            </div>
                        </CardHeader>
                        <CardBody className='pb-0'>
                            <div className="">
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                06.05.2024
                                            </Typography>
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                Anytown, NY 12345
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography variant="small" color="gray" className="font-normal  text-gray-600">
                                                8:00AM
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                                123 Main St.
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                06.05.2024
                                            </Typography>
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                Anytown, NY 12345
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography variant="small" color="gray" className="font-normal  text-gray-600">
                                                8:00AM
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                                123 Main St.
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                06.05.2024
                                            </Typography>
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                Anytown, NY 12345
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography variant="small" color="gray" className="font-normal  text-gray-600">
                                                8:00AM
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                                123 Main St.
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                        </CardBody>
                        <CardFooter className='flex justify-between border-t-2'>
                            <div className='flex items-center space-x-2'>
                                <div><UserCircleIcon className='w-14' /></div>
                                <div>
                                    <p className=' font-semibold text-lg'>Thoshon Eve</p>
                                    <p className=' text-base'>Client</p>
                                </div>
                            </div>
                            <PhoneIcon className=' w-6 space-x-2' />
                        </CardFooter>
                    </Card>

                    <Card className=' w-full lg:w-1/2 2xl:w-1/3 px-2 mb-4'>
                        <CardHeader className=' flex items-center justify-around h-12'>
                            <div className='flex space-x-2'>
                                <p>Cargo ID:</p>
                                <p className=' font-bold text-gray-900'>#1266769</p>
                            </div>
                            <div className=' flex space-x-2'>
                                <Chip color="red" value="transfer" />
                                <EllipsisVerticalIcon className=' w-6 cursor-pointer' />
                            </div>
                        </CardHeader>
                        <CardBody className='pb-0'>
                            <div className="">
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                06.05.2024
                                            </Typography>
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                Anytown, NY 12345
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography variant="small" color="gray" className="font-normal  text-gray-600">
                                                8:00AM
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                                123 Main St.
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                06.05.2024
                                            </Typography>
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                Anytown, NY 12345
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography variant="small" color="gray" className="font-normal  text-gray-600">
                                                8:00AM
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                                123 Main St.
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineHeader className="h-3">
                                            <TimelineIcon />
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                06.05.2024
                                            </Typography>
                                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                                Anytown, NY 12345
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-8">
                                            <Typography variant="small" color="gray" className="font-normal  text-gray-600">
                                                8:00AM
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal text-gray-600">
                                                123 Main St.
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                        </CardBody>
                        <CardFooter className='flex justify-between border-t-2'>
                            <div className='flex items-center space-x-2'>
                                <div><UserCircleIcon className='w-14' /></div>
                                <div>
                                    <p className=' font-semibold text-lg'>Thoshon Eve</p>
                                    <p className=' text-base'>Client</p>
                                </div>
                            </div>
                            <PhoneIcon className=' w-6 space-x-2' />
                        </CardFooter>
                    </Card>
                </div>

            </div>
        </div>
    )
}
