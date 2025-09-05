'use client';
import IconLockDots from '@/components/icon/icon-lock-dots';
import IconMail from '@/components/icon/icon-mail';
import IconUser from '@/components/icon/icon-user';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';
import IconPhone from '../icon/icon-phone';
import IconPhoneCall from '../icon/icon-phone-call';
import IconDOB from '../icon/icon-dob';
import IconGender from '../icon/icon-gender';
import IconUsers from '../icon/icon-users';

const ComponentsAuthRegisterForm = ({ onVerify,
    verifiedLabel = "Verified",
    className = "", }: any) => {
    const [checked, setChecked] = useState(false);

    const toggle = () => {
        const next = !checked;
        setChecked(next);
        onVerify?.(next);
    };
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date1, setDate1] = useState<any>('');
    const router = useRouter();

    const submitForm = (e: any) => {
        e.preventDefault();
        router.push('/');
    };
    const [institute, setInstitute] = useState("");
    const [isOther, setIsOther] = useState(false);

    const handleChange = (e: any) => {
        const value = e.target.value;
        if (value === "Other") {
            setIsOther(true);
            setInstitute(""); // reset input
        } else {
            setIsOther(false);
            setInstitute(value);
        }
    };
    const [courierCharge, setCourierCharge] = useState(0);

    const [registrationType, setRegistrationType] = useState("");
    const [offlineCollector, setOfflineCollector] = useState({ name: "", contact: "" });
    const [courier, setCourier] = useState({
        houseNo: "",
        building: "",
        line1: "",
        line2: "",
        city: "",
        district: "",
        state: "",
        pincode: "",
        contact: ""
    });
    const [services, setServices] = useState<any>({
        language: false,
        courier: false,
    });

    const handleServiceChange = (key: any) => {
        setServices({ ...services, [key]: !services[key] });
    };
    const registrationCharge = 300; // example base fee
    const languageCharge = services.language ? 100 : 0;


    useEffect(() => {
        setCourierCharge(registrationType === "online" ? 100 : 0);
    }, [registrationType]);

    const total = registrationCharge + languageCharge + courierCharge;
    console.log("courierCharge", registrationType, courierCharge);
    const [gender, setGender] = useState("");
    const [instituteType, setInstituteType] = useState("");

    const [regBace, setRegBace] = useState("");

    return (
        <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
            <form className="space-y-5">


                <div>
                    <label htmlFor="Name">Full Name</label>
                    <div className="relative text-white-dark">
                        <input id="Name" type="text" placeholder="Enter Full Name" className="form-input ps-10 placeholder:text-white-dark" />
                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                            <IconUser fill={true} />
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="gridState">Gender</label>
                        <div className="relative text-white-dark">
                            <select id="gridState"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className={`form-select ps-10 w-full border rounded-md ${gender === "" ? "text-gray-400" : "text-gray-900"
                                    }`}
                            >
                                <option value="" disabled selected className=' text-white-dark' style={{ color: '#6b7280 !important' }}>
                                    Select Gender
                                </option>
                                <option >Male</option>
                                <option>Female</option>
                            </select>
                            <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                <IconUsers />
                            </span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Date of Birth </label>
                        <div className="relative text-white-dark">
                            {/* <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input ps-10 placeholder:text-white-dark" onChange={(date) => setDate1(date)} placeholder='Select Date of Birth' /> */}
                            <input id="startDate" type="date" name="inv-date" className="form-input  placeholder:text-white-dark" />

                            {/* <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                <IconDOB fill={false} />
                            </span> */}
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="gridEmail">Email</label>
                        <div className="relative text-white-dark">
                            <input id="Email" type="email" placeholder="Enter Email" className="form-input ps-10 placeholder:text-white-dark" />
                            <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                <IconMail fill={true} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone">Contact</label>

                        <div className="relative text-white-dark">


                            <input id="phone" type="number" placeholder="Enter Contact" className="form-input ps-10 placeholder:text-white-dark" />
                            <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                <IconPhoneCall fill={true} />
                            </span>
                        </div> </div>

                </div>
                {/* <div className="relative flex items-center py-1">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-sm font-bold text-gray-400 dark:text-gray-300">Institute Details</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div>
                        <label htmlFor="gridState">Institute Type</label>
                        <select id="gridState"
                            value={gender}
                            onChange={(e) => setInstituteType(e.target.value)}
                            className={`form-select w-full border rounded-md ${instituteType === "" ? "text-gray-400" : "text-gray-900"
                                }`}>
                            <option value="" disabled selected className=' text-white-dark' style={{ color: '#6b7280 !important' }}>
                                Select Institute Type
                            </option>
                            <option>School</option>
                            <option>College</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="institute" className="font-medium text-gray-700">
                        Institute Name
                    </label>

                    {!isOther ? (
                        <select
                            id="institute"
                            className={`form-select w-full border rounded-md ${institute === "" ? "text-gray-400" : "text-gray-900"}`}
                            value={institute}
                            onChange={handleChange}
                        >
                            <option value="" className=' form-select text-white-dark'>-- Select Institute --</option>
                            <option value="G L Bajaj">G L Bajaj</option>
                            <option value="Other">Other</option>
                        </select>
                    ) : (
                        <input
                            type="text"
                            id="institute"
                            placeholder="Enter institute name"
                            className="form-input ps-10 placeholder:text-white-dark"
                            value={institute}
                            onChange={(e) => setInstitute(e.target.value)}
                        />
                    )}
                </div>
                {/* <div className="relative flex items-center py-1">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-sm font-bold text-gray-400 dark:text-gray-300">Registration Type</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div> */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="gridState">Registering BACE</label>
                        <select id="gridState" className="form-select ps-10 placeholder:text-white-dark form-select text-white-dark">
                            <option>Mayapur BACE</option>
                            <option>Braj Dham BACE</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Registration Type</label>
                        <select id="gridState" className="form-select ps-10 placeholder:text-white-dark form-select text-white-dark">
                            <option>Online </option>
                            <option>Offline</option>
                        </select>
                    </div>
                    <div>
                    <label htmlFor="remarks">Remarks</label>
                    <textarea
                        id="remarks"
                        placeholder="Enter remarks"
                        className="form-input ps-10 placeholder:text-white-dark"
                        value={institute}
                        onChange={(e) => setInstitute(e.target.value)}
                    />
                    </div>
                   
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="bace">Registering BACE</label>
                        <select id="bace" value={gender}
                            onChange={(e) => setRegBace(e.target.value)}
                            className={`form-select w-full border rounded-md ${regBace === "" ? "text-gray-400" : "text-gray-900"}`}>
                            <option>Mayapur BACE</option>
                            <option>Braj Dham BACE</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="regType">Registration Type</label>
                        <select
                            id="regType"
                            value={registrationType}
                            onChange={(e) => setRegistrationType(e.target.value)}
                            className={`form-select w-full border rounded-md ${registrationType === "" ? "text-gray-400" : "text-gray-900"}`}>


                            <option value="">-- Select Type --</option>
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                        </select>
                    </div>
                </div>



                {/* Conditional Fields */}
                {registrationType === "offline" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 border p-4 rounded-lg">
                        <div>
                            <label>Collector Name</label>
                            <input
                                type="text"
                                placeholder="Enter Collector Name"
                                className="form-input"
                                value={offlineCollector.name}
                                onChange={(e) =>
                                    setOfflineCollector({ ...offlineCollector, name: e.target.value })
                                }
                            />
                        </div>
                        <div>
                            <label>Collector Contact</label>
                            <input
                                type="text"
                                placeholder="Enter Collector Contact"
                                className="form-input"
                                value={offlineCollector.contact}
                                onChange={(e) =>
                                    setOfflineCollector({ ...offlineCollector, contact: e.target.value })
                                }
                            />
                        </div>
                    </div>
                )}

                {registrationType === "online" && (
                    <div className="mt-4 border p-4 rounded-lg space-y-3">
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold">Courier Address</h3>
                            <p className="text-xs text-gray-500">
                                ( *This service is only available for <span className="font-semibold">Delhi & NCR </span>)
                            </p>
                        </div>

                        <input
                            type="text"
                            placeholder="House No., Building Name"
                            className="form-input"
                            value={courier.houseNo}
                            onChange={(e) => setCourier({ ...courier, houseNo: e.target.value })}
                        />
                        {/* <input
                            type="text"
                            placeholder="Building Name"
                            className="form-input"
                            value={courier.building}
                            onChange={(e) => setCourier({ ...courier, building: e.target.value })}
                        /> */}
                        <input
                            type="text"
                            placeholder="Address Line 1"
                            className="form-input"
                            value={courier.line1}
                            onChange={(e) => setCourier({ ...courier, line1: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Address Line 2"
                            className="form-input"
                            value={courier.line2}
                            onChange={(e) => setCourier({ ...courier, line2: e.target.value })}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="form-input"
                                value={courier.city}
                                onChange={(e) => setCourier({ ...courier, city: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="District"
                                className="form-input"
                                value={courier.district}
                                onChange={(e) => setCourier({ ...courier, district: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="State"
                                className="form-input"
                                value={courier.state}
                                onChange={(e) => setCourier({ ...courier, state: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Pincode"
                                className="form-input"
                                value={courier.pincode}
                                onChange={(e) => setCourier({ ...courier, pincode: e.target.value })}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="form-input"
                            value={courier.contact}
                            onChange={(e) => setCourier({ ...courier, contact: e.target.value })}
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="remarks">Remarks</label>
                    <textarea
                        id="remarks"
                        placeholder="Enter remarks"
                        className="form-input ps-10 placeholder:text-white-dark"
                    />
                </div>
                {/* <div className="relative flex items-center py-1">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-sm font-bold text-gray-400 dark:text-gray-300">Services</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div> */}

                <div className="mt-8 bg-white dark:bg-gray-800 shadow-lg  p-6 border border-gray-200 border-l-4 border-l-blue-600 dark:border-gray-700 max-w-md mx-auto">
                    {/* Success Message */}
                    <div className="mb-6 p-3 bg-green-50 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg text-sm">
                        {/* 🎉 Congratulations! Your registration is successful.   */}
                        {/* <br /> */}
                        The <span className="font-semibold">Prajna Contest Kit</span> will be provided for your preparation.

                        <br />

                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                        You may also opt language preference
                    </span>
                    <div className="mt-1 mb-5 space-y-3 border rounded-lg p-2 bg-[#fff9ed] border-red-900">

                        <label className="flex items-center justify-between gap-2 cursor-pointer">

                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                English Bhagavad Gita (+ ₹100)
                            </span>
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600"
                                checked={services.language}
                                onChange={() => handleServiceChange("language")}
                            />
                        </label>

                    </div>
                    {/* <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Payment Information
    </h3> */}
                    <div className='border-b border-l-2 mb-2'></div>

                    <div className="space-y-3 text-sm">
                        {/* Registration */}
                        <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Registration Charge</span>
                            <span className="font-medium text-gray-800 dark:text-gray-100">
                                ₹{registrationCharge}
                            </span>
                        </div>

                        {/* Language */}
                        {services.language && (
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">
                                    Bhagavad Gita (English) <span className="text-xs text-gray-500"></span>
                                </span>
                                <span className="font-medium text-gray-800 dark:text-gray-100">+ ₹100</span>
                            </div>
                        )}

                        {/* Courier */}
                        {courierCharge > 0 && (
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-300">
                                    <p>Courier Charges</p>
                                    <p className="text-xs text-gray-500 mt-2">
                                        *Delivery Service only for <span className="font-semibold">Delhi & NCR</span>
                                    </p>
                                </span>
                                <span className="font-medium text-gray-800 dark:text-gray-100">+ ₹100</span>
                            </div>
                        )}

                        <div className="border-t border-gray-300 dark:border-gray-600 my-3"></div>

                        {/* Total */}
                        <div className="flex justify-between text-base font-bold">
                            <span className="text-gray-900 dark:text-white">Total Amount</span>
                            <span className="text-blue-600 dark:text-blue-400">₹{total}</span>
                        </div>
                    </div>
                </div>


                <div className="mt-4 space-y-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600"

                        />
                        <span className="text-sm text-gray-700 dark:text-gray-200">
                            Details must be correct if found wrong then your registration will be cancelled on any position
                        </span>
                    </label>

                </div>
                <div className='w-full'>
                <button
                    type="button"
                    role="checkbox"
                    aria-checked={checked}
                    onClick={toggle}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggle();
                        }
                    }}
                    className={`w-full inline-flex items-center gap-3  border border-black-600 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 transition ${className}`}
                >
                    {/* Visual box */}
                    <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border ${checked ? "bg-blue-600 border-blue-600" : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                            }`}
                        aria-hidden
                    >
                        {checked ? (
                            <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" aria-hidden>
                                <path d="M9 16.2l-3.5-3.5a1 1 0 10-1.4 1.4l4.2 4.2a1 1 0 001.4 0L20 8a1 1 0 10-1.4-1.4L9 16.2z" />
                            </svg>
                        ) : (
                            <svg className="h-4 w-4 opacity-0" aria-hidden />
                        )}
                    </span>

                    {/* Label */}
                    <span className="flex flex-col text-left leading-tight">
                        <span className={`text-sm font-medium ${checked ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-200"}`}>
                            {checked ? verifiedLabel : "I'm not a robot"}
                        </span>
                        <span className="text-xs text-gray-500">Privacy-friendly UI only</span>
                    </span>
                </button>
                 </div>
                <button type="submit" className="btn btn-gradient p-3 !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                    Next
                </button>
            </form>


        </form>
    );
};

export default ComponentsAuthRegisterForm;
