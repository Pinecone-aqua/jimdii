/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from "react";
import { Fitnesses } from "@/util/dummydata";
import { useRouter } from "next/router";
import { IoMdArrowBack } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Timetable from "@/components/subcomp/SingleFitness/Timetable";
import FitnessPrice from "@/components/subcomp/SingleFitness/FitnessPrice";
import Discount from "@/components/subcomp/SingleFitness/Discount";
import ContactInfo from "@/components/subcomp/SingleFitness/ContactInfo";
import Link from "next/link";
import Spec from "@/components/subcomp/SingleFitness/Spec";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { FitnessProp, FitnessType } from "@/util/types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
// import { MinusIcon } from "@chakra-ui/icons/dist/Minus";

export default function SingleGym({ data: fitness }: { data: FitnessType }) {
  const [changeImg, setChangeImg] = useState(0);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  function handleDay() {
    if (dayRef.current.value < 29) {
      setDay(dayRef.current.value);
    } else {
      setDay(29);
    }
  }

  function handleDayAdd() {
    if (dayRef.current.value < 29) {
      setDay(Number(dayRef.current.value) + 1);
    } else {
      setDay(29);
    }
  }

  function handleDayMinus() {
    if (dayRef.current.value > 0 && dayRef.current.value != null) {
      setDay(Number(dayRef.current.value) - 1);
    } else {
      setDay(0);
    }
  }

  function handleMonth() {
    if (monthRef.current.value < 11) {
      setMonth(monthRef.current.value);
    } else {
      setMonth(11);
    }
    // if (monthRef.current.value == null) {
    //   setMonth(0);
    // } else {
    //   setMonth(monthRef.current.value);
    // }
  }

  function handleMonthAdd() {
    if (monthRef.current.value < 11) {
      setMonth(Number(monthRef.current.value) + 1);
    } else {
      setMonth(11);
    }
  }

  function handleMonthMinus() {
    if (monthRef.current.value > 0) {
      setMonth(Number(monthRef.current.value) - 1);
    } else {
      setMonth(0);
    }
  }
  function handleYear() {
    if (yearRef.current.value < 5) {
      setYear(yearRef.current.value);
    } else {
      setYear(5);
    }
  }

  function handleYearAdd() {
    if (yearRef.current.value < 5) {
      setYear(Number(yearRef.current.value) + 1);
    } else {
      setYear(5);
    }
  }

  function handleYearMinus() {
    if (yearRef.current.value > 0) {
      setYear(Number(yearRef.current.value) - 1);
    } else {
      setYear(0);
    }
  }

  if (!fitness) fitness = Fitnesses[0];

  const changeImgStyle =
    "absolute top-0 h-full flex items-center text-main w-1/2 group";

  function changeImgLeft() {
    if (changeImg > 0) setChangeImg((i) => i - 1);
  }
  function changeToRigth() {
    if (changeImg < fitness.image.length - 1) setChangeImg((i) => i + 1);
  }
  return (
    <div className="min-h-screen bg-gray-900 text-black">
      <div className="container mx-auto p-6">
        <div className="border-b-2 p-3 border-main flex text-main items-center gap-5">
          <button
            onClick={() => router.back()}
            className="border-2 border-main rounded-2xl"
          >
            <IoMdArrowBack size={"2em"} />
          </button>
          <p className="text-xl font-bold">&quot;{fitness.name}&quot;</p>
        </div>
        <>
          <p className="flex items-center my-5 text-xs text-white">
            <IoLocationSharp size={"1rem"} /> {fitness.address.description}
          </p>
        </>
        <div className="lg:flex justify-between gap-8">
          <div className="w-full lg:w-7/12 flex flex-col gap-4 my-4">
            <div className="flex w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative rounded-xl select-none">
              <p
                onClick={changeImgLeft}
                className={`${changeImgStyle} left-0 rounded-l-xl justify-start`}
              >
                <IoIosArrowBack
                  size={"2em"}
                  className="bg-black rounded-2xl m-2 p-1 group-active:bg-black/50 cursor-pointer"
                />
              </p>
              <picture className="w-full h-full">
                <img
                  src={fitness.image[changeImg]}
                  alt=""
                  className="h-full w-full object-cover rounded-xl"
                />
              </picture>
              <p
                onClick={changeToRigth}
                className={`${changeImgStyle} right-0 rounded-r-xl justify-end`}
              >
                <IoIosArrowForward
                  size={"2em"}
                  className="bg-black rounded-2xl m-1 p-1 group-active:opacity-50 cursor-pointer"
                />
              </p>
            </div>
            <div className="w-full flex justify-between py-2 px-4 items-center rounded-xl bg-gray-200">
              <ContactInfo contact={fitness.contact} />

              <button
                onClick={() => {
                  onOpen();
                  console.log("hi");
                }}
                className="px-4 py-2 bg-main rounded-lg"
              >
                Бүртгүүлэх
              </button>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                motionPreset="scale"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Захиалга</ModalHeader>
                  <ModalBody pb={6}>
                    <h3 className="text-center font-bold mb-10">
                      Хугацаагаа сонгоно уу
                    </h3>
                    <div className="border-b border-black pb-10">
                      <div>
                        <label htmlFor="day">Хоног: </label>
                        <div>
                          <input
                            ref={dayRef}
                            onChange={handleDay}
                            className="border border-black"
                            type="number"
                            id="day"
                            name="day"
                            // defaultValue={0}
                            value={day}
                            max="30"
                            required
                          />
                          <IconButton
                            onClick={handleDayMinus}
                            aria-label="Add to friends"
                            icon={<MinusIcon />}
                          />
                          <IconButton
                            onClick={handleDayAdd}
                            aria-label="Add to friends"
                            icon={<AddIcon />}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="month">Сар: </label>
                        <form>
                          <input
                            ref={monthRef}
                            onChange={handleMonth}
                            className="border border-black"
                            type="number"
                            id="month"
                            name="month"
                            // min={0}
                            value={month}
                            required
                          />
                          <IconButton
                            onClick={handleMonthMinus}
                            aria-label="Add to friends"
                            icon={<MinusIcon />}
                          />
                          <IconButton
                            onClick={handleMonthAdd}
                            aria-label="Add to friends"
                            icon={<AddIcon />}
                          />
                        </form>
                      </div>
                      {/* <div>
                        <label htmlFor="year">Жил: </label>
                        <div>
                          <input
                            ref={yearRef}
                            onChange={handleYear}
                            className="border border-black"
                            type="number"
                            id="year"
                            name="year"
                            value={year}
                            required
                          />
                          <IconButton
                            onClick={handleYearMinus}
                            aria-label="Add to friends"
                            icon={<MinusIcon />}
                          />
                          <IconButton
                            onClick={handleYearAdd}
                            aria-label="Add to friends"
                            icon={<AddIcon />}
                          />
                        </div>
                      </div> */}
                    </div>
                    <div>
                      <p>
                        Нийт хугацаа: {day} өдөр, {month} сар
                      </p>
                      <p>
                        Нийт төлбөр:{" "}
                        {fitness.price?.onetime * day +
                          fitness.price?.oneMonth * month}
                      </p>
                    </div>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                      Захиалах
                    </Button>
                    <Button
                      onClick={() => {
                        onClose();
                        setDay(0);
                        setMonth(0);
                        setYear(0);
                      }}
                    >
                      Цуцлах
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
          <div className="w-full lg:w-5/12 rounded-xl p-1 flex flex-col lg:text-sm text-base bg-gray-200 text-black">
            <div className="flex w-full gap-5 flex-col md:flex-row">
              <FitnessPrice price={fitness.price} />
              <Discount discounts={fitness.discount} />
            </div>
            <div className="flex w-full gap-5 flex-col md:flex-row">
              <Timetable timetable={fitness.timetable} />
              <Spec />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 p-3 my-4 rounded-xl">
          <span className="text-lg font-bold">Танилцуулга:</span>
          <p className="px-2">{fitness.description}</p>
        </div>
      </div>
    </div>
  );
}
export const getStaticPaths: GetStaticPaths = async ({}) => {
  const res = await axios.get("http://localhost:7003/fitness/id");
  const paths = await res.data.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<FitnessProp> = async ({
  params,
}: GetStaticPropsContext) => {
  try {
    const { data } = await axios.get(
      `http://localhost:7003/fitness/getfitness${params?.id}`
    );
    return {
      props: {
        data: data,
      },
    };
  } catch (err) {
    return {
      props: {
        data: null,
      },
    };
  }
};
