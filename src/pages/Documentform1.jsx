// import React from 'react';
import React, { useState } from 'react';
import { Text, Img, Button, Heading, Input, SelectBox, TextArea } from "../components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


export default function DocumentForm() {

    const [dueDate, setDueDate] = useState(null);

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const dropDownOptions = [
        { label: "General", value: "General" },
        { label: "Limited", value: "Limited" },
        { label: "Specific", value: "Specific" },
      ];
  return (
    <div className="flex flex-col items-center justify-start w-full p-5">
        <div className="flex flex-col items-center justify-start w-[42%] py-5">
        <div className="flex flex-col items-center justify-start w-full gap-3 p-4">
        </div>
        <div className="flex flex-row justify-center w-full p-3">
            <div className="flex flex-row justify-start w-full mt-3 pt-0.5 mx-1 max-w-[480px]">
            <Heading size="md" as="h1" className="tracking-[-0.80px]">
           Contracts
            </Heading>
            </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
            <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full py-[3px]">
                <Text as="p" className="mb-[5px]">
                Subject matter of the contract
                </Text>
                </div>
                <TextArea
                name="enter_Subject"
                placeholder="Enter Subject"
                className="w-full text-blue_gray-500"
                />
            </div>
            </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
            <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full py-[3px]">
                <Text as="p" className="mb-[5px]">
                Terms and conditions
                </Text>
                </div>
                <TextArea
                name="enter_Terms"
                placeholder="Enter Terms"
                className="w-full text-blue_gray-500"
                />
            </div>
            </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
            <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full py-[3px]">
                <Text as="p" className="mb-[5px]">
                Compensation details
                </Text>
                </div>
                <TextArea
                name="enter_Compensation"
                placeholder="Enter Compensation"
                className="w-full text-blue_gray-500"
                />
            </div>
            </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
            <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full py-[3px]">
                <Text as="p" className="mb-[5px]">
                Termination clauses
                </Text>
                </div>
                <TextArea
                name="enter_Termination"
                placeholder="Enter Termination"
                className="w-full text-blue_gray-500"
                />
            </div>
            </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
            <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full py-[3px]">
                <Text as="p" className="mb-[5px]">
                Dispute resolution mechanisms
                </Text>
                </div>
                <TextArea
                name="enter_resolution"
                placeholder="Enter resolution"
                className="w-full text-blue_gray-500"
                />
            </div>
            </div>
        </div>
        <div className="flex flex-row justify-start w-full mt-3 p-[11px]">
            <div className="flex flex-row justify-start w-[37%] mt-2 ml-1">
            <div className="flex flex-row justify-start w-full">
                <Heading as="h3" className="tracking-[-0.33px]">
                Power of Attorney
                </Heading>
            </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
            <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
            Scope of power granted
            </Text>
            </div>
            <SelectBox
                indicator={<Img src="https://img.icons8.com/ios/50/expand-arrow--v2.png" alt="Vector - 0" className="w-[20px] h-[20px]"/>}
                name="select"
                placeholder="Select Power"
                options={dropDownOptions}
                className="w-full gap-px border-blue_gray-100 border border-solid"
            />
        </div>
         <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
                <div className="flex flex-row justify-start w-full py-0.5">
                    <Text as="p" className="mb-[7px]">
                    Start Date
                    </Text>
                </div>
                <div className="flex items-center w-full">
                    <Img src="path_to_calendar_icon" alt="Calendar" className="w-6 h-6 mr-2 cursor-pointer" />
                    <input
                        type="date"
                        name="StartDate"
                        placeholder="Select Start date"
                        value={dueDate}
                        onChange={handleDateChange}
                        className="w-full"
                    />
                </div>
            </div>
         <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
                <div className="flex flex-row justify-start w-full py-0.5">
                    <Text as="p" className="mb-[7px]">
                        End Date
                    </Text>
                </div>
                <div className="flex items-center w-full">
                    <Img src="path_to_calendar_icon" alt="Calendar" className="w-6 h-6 mr-2 cursor-pointer" />
                    <input
                        type="date"
                        name="EndDate"
                        placeholder="Select end date"
                        value={dueDate}
                        onChange={handleDateChange}
                        className="w-full"
                    />
                </div>
            </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
            <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full py-0.5">
                <Text as="p" className="mb-[7px]">
                Restrictions or limitations
                </Text>
                </div>
                <TextArea
                name="depth8framezero"
                placeholder="Enter restrictions"
                className="w-full text-blue_gray-500"
                />
            </div>
            </div>
        </div>
        <div className="flex flex-row justify-center w-full p-3">
            <div className="flex flex-row justify-start w-full mt-3 pt-0.5 mx-1 max-w-[480px]">
            <Heading size="md" as="h1" className="tracking-[-0.80px]">
            Affidavits
            </Heading>
            </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
            <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
            Content of the statement being sworn
            </Text>
            </div>
            <SelectBox
            indicator={<Img src="https://img.icons8.com/ios/50/expand-arrow--v2.png" alt="Vector - 0" className="w-[20px] h-[20px]"/>}
            name="select"
            placeholder="Select Content"
            options={dropDownOptions}
            className="w-full gap-px border-blue_gray-100 border border-solid"
            />
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
            <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full py-0.5">
                <Text as="p" className="mb-[7px]">
                Facts supporting the statement
                </Text>
                </div>
                <TextArea
                name="depth8framezero"
                placeholder="Enter termination condition"
                className="w-full text-blue_gray-500"
                />
            </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
            <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
            Wills
            </Text>
            </div>
            <SelectBox
            indicator={<Img src="https://img.icons8.com/ios/50/expand-arrow--v2.png" alt="Vector - 0" className="w-[20px] h-[20px]"/>}
            name="selectdocument"
            placeholder="Select document type"
            options={dropDownOptions1}
            className="w-full gap-px border-blue_gray-100 border border-solid"
            />
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
            <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
            Distribution of assets
            </Text>
            </div>
            <SelectBox
            indicator={<Img src="https://img.icons8.com/ios/50/expand-arrow--v2.png" alt="Vector - 0" className="w-[20px] h-[20px]"/>}
            name="select"
            placeholder="Select profession"
            options={dropDownOptions}
            className="w-full gap-px border-blue_gray-100 border border-solid"
            />
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
            <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full py-0.5">
                <Text as="p" className="mb-[7px]">
                Executor information
                </Text>
                </div>
                <TextArea
                name="depth8framezero"
                placeholder="Enter termination condition"
                className="w-full text-blue_gray-500"
                />
            </div>
            </div>
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
            <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full py-0.5">
                <Text as="p" className="mb-[7px]">
                Guardianship arrangements
                </Text>
                </div>
                <TextArea
                name="depth8framezero"
                placeholder="Enter termination condition"
                className="w-full text-blue_gray-500"
                />
            </div>
            </div>
        </div>

        </div>
    </div>
  )
}
