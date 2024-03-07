import React, { useEffect, useState } from "react";
import axios from "axios";

import AddImageIcon from "../../assets/icon/image (1).png";

import {
    Card,
    CardBody,
    Input,
    Select,
    Option,
    Textarea,
    Button,
} from "@material-tailwind/react";
import { fetchAllField } from "../../services/fieldService";
import { fetchAllCategoryByFieldId } from "../../services/categoryService";
import { fetchBrandsByFieldId } from "../../services/brandService";
import { addProduct } from "../../services/productService";
import { useSelector } from 'react-redux'

import Image from '../../../src/assets/image/Bedroom1.jpg'

export default function AddProducts() {

    const seller_id = useSelector((state) => state.seller.seller.user_id);

    // Khai báo state để lưu trữ dữ liệu nhập từ form
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productColor, setProductColor] = useState("");
    const [productSize, setProductSize] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productStock, setProductStock] = useState(0);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [selectedBrandId, setSelectedBrandId] = useState(null);

    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);

    const [dataField, setDataField] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [dataBrand, setDataBrand] = useState([]);

    const [selectedFieldId, setSelectedFieldId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resBrand = await fetchAllField();
                setDataField(resBrand.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resCategory = await fetchAllCategoryByFieldId(parseInt(selectedFieldId));
                setDataCategory(resCategory.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [selectedFieldId])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resBrand = await fetchBrandsByFieldId(parseInt(selectedFieldId));
                setDataBrand(resBrand.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [selectedFieldId])

    const handleChange1 = (e) => {
        const selectedFile = e.target.files[0];
        setFile1(selectedFile);
    };
    const handleChange2 = (e) => {
        const selectedFile = e.target.files[0];
        setFile2(selectedFile);
    };
    const handleChange3 = (e) => {
        const selectedFile = e.target.files[0];
        setFile3(selectedFile);
    };

    //hàm xử lý field
    const handlechangeField = (e) => {
        const selectedFieldId = parseInt(e);
        if (!isNaN(selectedFieldId)) {
            setSelectedFieldId(selectedFieldId);
        }
        console.log(selectedFieldId);
    };

    const handlechangeCategory = (e) => {
        const selectedCategoryId = parseInt(e);
        if (!isNaN(selectedCategoryId)) {
            setSelectedCategoryId(selectedCategoryId);
        }
        console.log(selectedCategoryId);
    };

    const handlechangeBrand = (e) => {
        const selectedBrandId = parseInt(e);
        if (!isNaN(selectedBrandId)) {
            setSelectedBrandId(selectedBrandId);
        }
        console.log(selectedBrandId);
    };

    // Hàm xử lý khi người dùng nhấn vào nút "Add New Products"
    const handleAddProduct = async () => {
        try {
            // Kiểm tra giá trị của selectedCategoryId và selectedBrandId trước khi gọi API
            if (!selectedCategoryId || !selectedBrandId) {
                console.error("Selected category or brand is invalid.");
                return;
            }

            const formData = new FormData();

            formData.append("image_urls[]", file1);
            formData.append("image_urls[]", file2);
            formData.append("image_urls[]", file3);
            formData.append("name", productName);
            formData.append("description", productDescription);
            formData.append("stock", 3224);
            formData.append("product_category_id", selectedCategoryId);
            formData.append("product_brand_id", selectedBrandId);
            formData.append("created_by_user_id", seller_id);
            formData.append("price", productPrice);
            formData.append("colors[]", "a");
            formData.append("colors[]", "h");
            formData.append("sizes[]", "s");
            formData.append("sizes[]", "as");

            console.log("Product Data:", formData);

            let res = await addProduct(formData);
            console.log("Response:", res);
            // Xử lý kết quả từ API (nếu cần)
            setProductName("");
            setProductDescription("");
            setProductStock(0);
            setSelectedCategoryId(null);
            setSelectedBrandId(null);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <Card className="w-full p-4 bg-white rounded-xl">
            <CardBody>
                <div className="flex">
                    <div className="w-[15%]">Product Images</div>
                    <div className="w-[85%]">
                        <p>Image (You can upload max 3 images)</p>
                        <div className=" flex">
                            <div>
                                <input type="file" onChange={handleChange1} />
                                {file1 && <img className=" w-24" src={URL.createObjectURL(file1)} alt="Selected File" />}
                            </div>
                            <div>
                                <input type="file" onChange={handleChange2} />
                                {file2 && <img className=" w-24" src={URL.createObjectURL(file2)} alt="Selected File" />}
                            </div>
                            <div>
                                <input type="file" onChange={handleChange3} />
                                {file3 && <img className=" w-24" src={URL.createObjectURL(file3)} alt="Selected File" />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-20 py-8">
                    <div className="w-[50%]">
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Product name
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productName} onChange={(e) => setProductName(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Field
                            </div>
                            <div className="w-[80%]">
                                <Select label="Select Version" onChange={handlechangeField} disabled={dataField.length === 0}>
                                    {dataField.map((data) => (
                                        <Option value={String(data.field_id)} key={data.field_id}>{data.field_name}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Category
                            </div>
                            <div className=" w-[80%]">
                                <Select label="Category" onChange={handlechangeCategory} disabled={selectedFieldId === null || dataCategory.length === 0}>
                                    {dataCategory.map((data) => (
                                        <Option value={String(data.product_category_id)} key={data.product_category_id}>{data.product_category_name}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Price
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Color
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productColor} onChange={(e) => setProductColor(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-16">
                            <div className=" w-[20%]">
                            </div>
                            <div className=" w-[80%]">
                                <Button className=" w-fit" onClick={handleAddProduct}>Add New Products</Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Brand
                            </div>
                            <div className=" w-[80%]">
                                <Select disabled={selectedFieldId === null || dataBrand.length === 0} label="Brand" onChange={handlechangeBrand}>
                                    {dataBrand.map((data) => (
                                        <Option value={String(data.product_brand_id)} key={data.product_brand_id}>{data.product_brand_name}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Stock
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Stock" type="number" value={productStock} onChange={(e) => setProductStock(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Description
                            </div>
                            <div className=" w-[80%]">
                                <Textarea color="gray" label="Textarea Gray" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Size
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" value={productSize} onChange={(e) => setProductSize(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}


