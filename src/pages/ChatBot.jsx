import React from 'react'
import { Heading, Text, Img, Input, Button } from "../components"

export default function ChatBot() {
  return (
    <div className="flex flex-row justify-center w-full p-5">
        <div className="flex flex-col items-start justify-center w-full pb-60 mx-[140px] max-w-[960px]">
        <header className="flex flex-row justify-center items-center w-full pt-3 pb-[11px] px-3 border-gray-200 border-b border-solid">
              <div className="flex flex-row justify-center w-[10%] ml-[27px]">
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <Img src="https://img.icons8.com/ios-filled/50/law.png" alt="image" className="h-8 w-8" />
                  <div className="flex flex-row justify-start w-[74%]">
                    <div className="flex flex-row justify-start w-full pt-5.5">
                      <Heading size="s" as="h6" className="tracking-[-0.27px]" style={{fontSize: '28px'}}>
                        LegalLise
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </header>
        <div className="flex flex-row justify-start p-2.5">
            <Heading size="md" as="h1" className="mt-2.5 ml-[5px] tracking-[-0.80px]">
            Analyzing a legal document
            </Heading>
        </div>
        <div className="flex flex-row justify-center w-full p-1">
            <div className="flex flex-row justify-start w-[98%] mb-1.5 mx-3">
            <Text size="s" as="p">
                You can upload a legal document for analysis. First, our AI will generate a summary of the
                document. Then, you can ask follow-up questions about the document&#39;s content or implications.
            </Text>
            </div>
        </div>
        <Button
            leftIcon={<Img src="https://img.icons8.com/metro/26/000000/file.png" alt="Vector - 0" />}
            className="mt-3 ml-4 gap-2 tracking-[0.21px] font-bold min-w-[184px] border-2 border-black-1400"
        >
            Upload document
        </Button>
        <div className="flex flex-row justify-start w-full mt-3 p-[7px]">
            <div className="flex flex-row justify-start w-[19%] mt-2 ml-2">
            <div className="flex flex-row justify-start w-full pt-0.5">
                <Heading as="h2" className="tracking-[-0.27px]">
                Document Summary
                </Heading>
            </div>
            </div>
        </div>
        <div className="flex flex-row justify-center w-full p-1">
            <div className="flex flex-row justify-start w-[98%] mb-1.5 mx-3">
            <Text size="s" as="p">
                Our AI has generated a summary of your document. You can ask follow-up questions about the
                document&#39;s content or implications.
            </Text>
            </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full p-[11px] bg-gray-50">
            <div className="flex flex-row justify-start items-center w-[61%] ml-1 gap-4">
            <Button size="sm" className=" rounded-lg">
                <Img src="https://img.icons8.com/metro/26/000000/file.png"/>
            </Button>
            <div className="flex flex-col items-start justify-start w-[33%] gap-px">
                <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row justify-start w-full">
                    <Text size="s" as="p" className="!font-medium">
                    Employment Agreement
                    </Text>
                </div>
                </div>
            </div>
            </div>
            <Img src="https://img.icons8.com/ios-filled/50/forward--v1.png" alt="arrowright_one" className="h-7 w-7 mr-1" style={{marginRight: '20px'}} />
        </div>
        <div className="flex flex-row justify-center w-full p-3">
    <div className="flex flex-row justify-start items-center w-full gap-4 p-2 mx-1 bg-blue_gray-50 rounded-[12px]">
        <div className="flex flex-row justify-start w-[83%] ml-2">
            <Input
                type="text"
                name="question"
                placeholder="Ask a question"
                className="w-full !text-blue_gray-500"
            />
        </div>
        <div className="flex flex-row justify-start w-[15%] gap-4">
            <Img src="https://img.icons8.com/windows/32/attach.png" alt="attach" className="h-8 w-8" />
            <div className="flex flex-row justify-center w-[64%] p-[5px] bg-blue-600 rounded-[12px]">
                <Button className="flex justify-center items-center w-[34px] h-[21px] p-px mx-[19px] !text-gray-50 bg-blue-600">
                    Send
                </Button>
            </div>
        </div>
    </div>
</div>
        </div>
    </div>
  )
}
