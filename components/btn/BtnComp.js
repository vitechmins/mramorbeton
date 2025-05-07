"use client"
import { useState } from "react";
import Modal from "../modal/Modal";
import Image from "next/image";

const BtnComp = ({ title, index, center, size, name, consult, color }) => {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleOrderClick = (product) => {
		setSelectedProduct(product);
		document.getElementById(`my_modal_${index}`).showModal();
	};

	const closeModal = () => {
		document.getElementById(`my_modal_${index}`).close();
	};

	return (
		<div className={`flex items-center z-0 ${center ? 'justify-center' : ''}`}>
			<button
				className={`btn border z-0 ${color ? `${color} border-none` : 'border-white hover:bg-primary hover:border-primary bg-white text-black'} 
				rounded-none
				sd:text-lg xz:text-base
				btn-md`}
				onClick={() => handleOrderClick(name)}
			>
				{title}
			</button>

			<Modal
				selectedProduct={selectedProduct}
				closeModal={closeModal}
				isFormSubmitted={isFormSubmitted}
				setIsFormSubmitted={setIsFormSubmitted}
				index={index}
				consult={consult}
			/>
		</div>
	)
}


export default BtnComp;
