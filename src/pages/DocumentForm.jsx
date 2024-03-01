// import React from 'react';
import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  Img,
  Button,
  Heading,
  Input,
  SelectBox,
  TextArea,
  PowerOfAttorneyComponent
} from "../components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const DocumentTypeSubComponents = ({ selectedDocumentType }) => {

    const dropDownOptions = [
        { label: "Student", value: "Student" },
        { label: "Businessman", value: "Businessman" },
        { label: "Lawyer", value: "Lawyer" },
      ];
    
      const dropDownOptions1 = [
        { label: "Contract", value: "Contract" },
        { label: "Power of Attorney", value: "Power of Attorney" },
        { label: "Affadinits", value: "Affadinits" },
        { label: "Wills", value: "Wills" },
      ];
    
      const dropDownOptions2 = [
        { label: "Cash", value: "Cash" },
        { label: "Online", value: "Online" },
      ];

    switch (selectedDocumentType) {
      case "Contract":
        return (
          <div className="flex flex-col items-center justify-start w-full p-5">
            <div className="flex flex-col items-center justify-start w-[42%] py-5">
              <div className="flex flex-col items-center justify-start w-full gap-3 p-4"></div>
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
            </div>
          </div>
        );
      case "Power of Attorney":
        return <PowerOfAttorneyComponent />;
      case "Affadinits":
        return(
            <>
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
        </>
          );
      case "Wills":
        return (
        <>
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
    </>
    );
      default:
        return <></>;
    }
};


export default function DocumentForm() {
  const documentTypeRef = useRef(null);
  const [dueDate, setDueDate] = useState(null);

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const dropDownOptions = [
    { label: "Student", value: "Student" },
    { label: "Businessman", value: "Businessman" },
    { label: "Lawyer", value: "Lawyer" },
  ];

  const dropDownOptions1 = [
    { label: "Contract", value: "Contract" },
    { label: "Power of Attorney", value: "Power of Attorney" },
    { label: "Affadinits", value: "Affadinits" },
    { label: "Wills", value: "Wills" },
  ];

  const dropDownOptions2 = [
    { label: "Cash", value: "Cash" },
    { label: "Online", value: "Online" },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full p-5">
      <div className="flex flex-col items-center justify-start w-[42%] py-5">
        <div className="flex flex-col items-center justify-start w-full gap-3 p-4"></div>
        <div className="flex flex-row justify-center w-full p-3">
          <div className="flex flex-row justify-start w-full mt-3 pt-0.5 mx-1 max-w-[480px]">
            <Heading size="md" as="h1" className="tracking-[-0.80px]">
              Create a new document
            </Heading>
          </div>
        </div>
        <div className="flex flex-row justify-start w-full mt-3 p-[11px]">
          <div className="flex flex-row justify-start w-[16%] mt-2 ml-1">
            <div className="flex flex-row justify-start w-full pt-0.5">
              <Heading as="h2" className="tracking-[-0.33px]">
                Party A
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Party A Name
            </Text>
          </div>
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            className="w-full"
          />
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
          <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-start w-full py-[3px]">
                <Text as="p" className="mb-[5px]">
                  Party A Address
                </Text>
              </div>
              <TextArea
                name="enter_address"
                placeholder="Enter address"
                className="w-full text-blue_gray-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-[3px]">
            <Text as="p" className="mb-[5px]">
              Party A Phone
            </Text>
          </div>
          <Input
            type="number"
            name="phone"
            placeholder="Enter phone"
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
              Profession
            </Text>
          </div>
          <SelectBox
            indicator={
              <Img
                src="https://img.icons8.com/ios/50/expand-arrow--v2.png"
                alt="Vector - 0"
                className="w-[20px] h-[20px]"
              />
            }
            name="select"
            placeholder="Select profession"
            options={dropDownOptions}
            className="w-full gap-px border-blue_gray-100 border border-solid"
          />
        </div>
        <div className="flex flex-row justify-start w-full mt-3 p-[11px]">
          <div className="flex flex-row justify-start w-[16%] mt-2 ml-1">
            <div className="flex flex-row justify-start w-full pt-0.5">
              <Heading as="h2" className="tracking-[-0.33px]">
                Party B
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Party B Name
            </Text>
          </div>
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            className="w-full"
          />
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
          <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-start w-full py-[3px]">
                <Text as="p" className="mb-[5px]">
                  Party B Address
                </Text>
              </div>
              <TextArea
                name="enter_address"
                placeholder="Enter address"
                className="w-full text-blue_gray-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-[3px]">
            <Text as="p" className="mb-[5px]">
              Party B Phone
            </Text>
          </div>
          <Input
            type="number"
            name="phone"
            placeholder="Enter phone"
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
              Profession
            </Text>
          </div>
          <SelectBox
            indicator={
              <Img
                src="https://img.icons8.com/ios/50/expand-arrow--v2.png"
                alt="Vector - 0"
                className="w-[20px] h-[20px]"
              />
            }
            name="select_one"
            placeholder="Select profession"
            options={dropDownOptions}
            className="w-full gap-px border-blue_gray-100 border border-solid"
          />
        </div>
        <div className="flex flex-row justify-start w-full mt-3 p-[11px]">
          <div className="flex flex-row justify-start w-[37%] mt-2 ml-1">
            <div className="flex flex-row justify-start w-full">
              <Heading as="h3" className="tracking-[-0.33px]">
                Document details
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-3 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Document Type
            </Text>
          </div>
          <SelectBox
            ref={documentTypeRef}
            indicator={
              <Img
                src="https://img.icons8.com/ios/50/expand-arrow--v2.png"
                alt="Vector - 0"
                className="w-[20px] h-[20px]"
              />
            }
            name="selectdocument"
            placeholder="Select document type"
            options={dropDownOptions1}
            className="w-full gap-px border-blue_gray-100 border border-solid"
          />
        </div>
        <DocumentTypeSubComponents selectedDocumentType={documentTypeRef.current.value} />
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-1">
            <Text as="p" className="mb-1">
              Payment Amount
            </Text>
          </div>
          <Input
            name="amount"
            placeholder="Enter payment amount"
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
              Jurisdiction
            </Text>
          </div>
          <Input
            name="date"
            placeholder="Enter Jurisdiction"
            className="w-full"
          />
        </div>
        {/* <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
            <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
                Due Date
            </Text>
            </div>
            <Input name="date" placeholder="Select due date" className="w-full" />
        </div> */}
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-0.5">
            <Text as="p" className="mb-[7px]">
              Due Date
            </Text>
          </div>
          <div className="flex items-center w-full">
            {/* <Img
              src="path_to_calendar_icon"
              alt="Calendar"
              className="w-6 h-6 mr-2 cursor-pointer"
            /> */}
            <input
              type="date"
              name="dueDate"
              placeholder="Select due date"
              value={dueDate}
              onChange={handleDateChange}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-6 max-w-[480px]">
          <div className="flex flex-row justify-start w-full py-[3px]">
            <Text as="p" className="mb-[5px]">
              Payment Method
            </Text>
          </div>
          <SelectBox
            indicator={
              <Img
                src="https://img.icons8.com/ios/50/expand-arrow--v2.png"
                alt="Vector - 0"
                className="w-[20px] h-[20px]"
              />
            }
            name="selectpayment"
            placeholder="Select payment method"
            options={dropDownOptions2}
            className="w-full gap-px border-blue_gray-100 border border-solid"
          />
        </div>
        <div className="flex flex-row justify-center w-full mt-3 p-3">
          <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-start w-full py-0.5">
                <Text as="p" className="mb-[7px]">
                  Termination Condition
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
        <div className="flex flex-row justify-center w-full p-3">
          <div className="flex flex-row justify-center w-full mx-1 max-w-[480px]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-start w-full py-0.5">
                <Text as="p" className="mb-[7px]">
                  Remedies
                </Text>
              </div>
              <TextArea
                name="enter_remedies"
                placeholder="Enter remedies"
                className="w-full text-blue_gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
