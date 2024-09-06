"use client";

import React from "react";
import contactsData from "../data/contacts.json";
import Image from "next/image";

const ArrowDownTrayIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
		<polyline points="7 10 12 15 17 10" />
		<line x1="12" y1="15" x2="12" y2="3" />
	</svg>
);

const DocumentTextIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
		<polyline points="14 2 14 8 20 8" />
		<line x1="16" y1="13" x2="8" y2="13" />
		<line x1="16" y1="17" x2="8" y2="17" />
		<polyline points="10 9 9 9 8 9" />
	</svg>
);

const CodeBracketIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<polyline points="16 18 22 12 16 6" />
		<polyline points="8 6 2 12 8 18" />
	</svg>
);

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<main className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<div className="bg-600 text-white text-2xl font-bold py-2 px-4 rounded inline-block mb-4">
						<Image
							src="https://github.com/shpark-vestellalab/watchmile-sdk-document/blob/main/public/assets/vestellalab_logo.png?raw=true"
							alt="Vestellalab Logo"
							width={200}
							height={50}
						/>
					</div>
					<h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
						Watchmile SDK Documentation
					</h1>
					<p className="mt-5 text-xl text-gray-500">
						Access our SDK resources and documentation
					</p>
				</div>

				{/* Main content */}
				<div className="mt-10">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{/* SDK Documentation */}
						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="px-4 py-5 sm:p-6">
								<div className="flex items-center">
									<div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
										<DocumentTextIcon />
									</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="text-sm font-medium text-gray-500 truncate">
												SDK Documentation
											</dt>
											<dd>
												<div className="text-lg font-medium text-gray-900">
													PDF Guide
												</div>
											</dd>
										</dl>
									</div>
								</div>
								<div className="mt-5">
									<a
										href="/path/to/sdk-documentation.pdf"
										className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm gap-2 text-white bg-blue-600 hover:bg-blue-700"
									>
										Download PDF
										<ArrowDownTrayIcon />
									</a>
								</div>
							</div>
						</div>

						{/* API Documentation */}
						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="px-4 py-5 sm:p-6">
								<div className="flex items-center">
									<div className="flex-shrink-0 bg-green-500 rounded-md p-3">
										<CodeBracketIcon />
									</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="text-sm font-medium text-gray-500 truncate">
												API Documentation
											</dt>
											<dd>
												<div className="text-lg font-medium text-gray-900">
													PDF Guide
												</div>
											</dd>
										</dl>
									</div>
								</div>
								<div className="mt-5">
									<a
										href="https://api.watchmile.net/cdn/kakao/favicon.zip"
										className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm gap-2 text-white bg-green-600 hover:bg-green-700"
									>
										Download PDF
										<ArrowDownTrayIcon />
									</a>
								</div>
							</div>
						</div>

						{/* SDK Download */}
						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="px-4 py-5 sm:p-6">
								<div className="flex items-center">
									<div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
										<ArrowDownTrayIcon />
									</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="text-sm font-medium text-gray-500 truncate">
												SDK Download
											</dt>
											<dd>
												<div className="text-lg font-medium text-gray-900">
													1.0.0
												</div>
											</dd>
										</dl>
									</div>
								</div>
								<div className="mt-5">
									<a
										href="/path/to/sdk-file.zip"
										className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 gap-2 hover:bg-purple-700"
									>
										Download SDK
										<ArrowDownTrayIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Contact Information */}
				<div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Contact Information
						</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">
							For any inquiries about our SDK.
						</p>
					</div>
					<div className="border-t border-gray-200">
						{contactsData.contacts.map((contact, index) => (
							<div
								key={index}
								className={`px-4 py-5 sm:px-6 ${
									index % 2 === 0 ? "bg-gray-50" : "bg-white"
								}`}
							>
								<div className="flex justify-between items-center mb-2">
									<h4 className="text-md font-medium text-gray-900">
										{contact.name}
									</h4>
									<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
										{contact.department}
									</span>
								</div>
								<dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium text-gray-500">
											Email address
										</dt>
										<dd className="mt-1 text-sm text-gray-900">
											{contact.email}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium text-gray-500">
											Phone number
										</dt>
										<dd className="mt-1 text-sm text-gray-900">
											{contact.phone}
										</dd>
									</div>
								</dl>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
