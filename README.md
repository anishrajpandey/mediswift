Anish
anish0733
Online



A wild limontan appeared. — Yesterday at 1:24 PM
Shivendra — Yesterday at 1:25 PM
Hi everybody
Shivendra — Yesterday at 1:25 PM
Anish just landed. — Yesterday at 1:26 PM
Welcome Nirman Khadka. Say hi! — Yesterday at 1:27 PM
Shivendra — Today at 7:25 AM
BuVpxqyXUjzIFrqTksxPQvowfUbLOLSL
postgresql://postgres:BuVpxqyXUjzIFrqTksxPQvowfUbLOLSL@postgres.railway.internal:5432/railway
postgresql://postgres:BuVpxqyXUjzIFrqTksxPQvowfUbLOLSL@junction.proxy.rlwy.net:54509/railway
Nirman Khadka — Today at 8:01 AM
helper>base_api.js
"
import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: "https://mediswiftserver.azurewebsites.net/api/",
    baseURL: "http://localhost:8000/api/",
});

export default axiosInstance;
"
chatThread.js:
"
"use client";
import { useState, useEffect } from 'react';
import HumanResponse from './HumanResponse';
import BotResponse from './BotResponse';
Expand
message.txt
3 KB
prompt.js
"
"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
Expand
message.txt
4 KB
Shivendra — Today at 8:07 AM
http://mediswiftbackend-production.up.railway.app/
Nirman Khadka — Today at 8:19 AM
# Install required libraries (uncomment if running for the first time)
!pip install transformers torch bitsandbytes kagglehub peft

# Import necessary libraries
import kagglehub
import pandas as pd
Expand
message.txt
7 KB
Anish — Today at 8:22 AM
Since there is no prior chat history and no treatment data found, we need to start gathering information. To proceed, I'd like to ask some questions. Could you please tell me what brings you here today? What seems to be the issue or concern you're experiencing?
fsadfdf
human
bot
Existing treatment data not found. Since no meaningful context or information was provided in the question "fsadfdf", we cannot determine the required treatment data. Please provide a clear description of the issue or concern you are experiencing so we can gather the necessary information to proceed with the patient's case.
ok
Expand
message.txt
5 KB
Nirman Khadka — Today at 8:26 AM
import json
from datetime import datetime
from v01.models import Query, Treatment
from groq import Groq
from rest_framework.response import Response
from rest_framework import status
Expand
message.txt
6 KB
Anish — Today at 8:30 AM
https://github.com/anishrajpandey/mediswift
GitHub
GitHub - anishrajpandey/mediswift
Contribute to anishrajpandey/mediswift development by creating an account on GitHub.
GitHub - anishrajpandey/mediswift
Nirman Khadka — Today at 8:44 AM
"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance"; // Make sure axiosInstance is correctly configured
import Navbar from "./Navbar";
Expand
message.txt
4 KB
Nirman Khadka — Today at 9:02 AM
"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";
import Navbar from "./Navbar";
Expand
message.txt
7 KB
Nirman Khadka — Today at 9:40 AM
from rest_framework import viewsets, status
from rest_framework.exceptions import ValidationError
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import action

from v01.utility import create_response, process_patient_query
Expand
message.txt
4 KB
Shivendra — Today at 10:21 AM
https://github.com/sh1vendra/mediswiftbackend.git
GitHub
GitHub - sh1vendra/mediswiftbackend
Contribute to sh1vendra/mediswiftbackend development by creating an account on GitHub.
Anish — Today at 10:21 AM
<svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<mask id="mask0_23_2657" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="117" height="117">
<circle cx="58.5" cy="58.5" r="58.5" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_23_2657)">
<rect x="-13.1912" y="-13.1912" width="143.382" height="143.382" fill="url(#pattern0_23_2657)"/>
Expand
logo.svg
46 KB
Image
Image
Image
Image
Image
Image
Image
Nirman Khadka — Today at 11:10 AM
# MediSwift

MediSwift is an AI-powered health assistant designed to streamline the end-to-end treatment process for patients and doctors. By automating tasks, MediSwift reduces wait times and costs, offering accessible, timely, and affordable healthcare.

## Inspiration
After a personal experience with delayed treatment and high costs, we realized the need for a more efficient, affordable healthcare solution. MediSwift aims to bridge this gap by digitalizing and automating treatment processes with AI, enabling timely and cost-effective care, especially for those abroad or with limited healthcare access.

## Features
- **Symptom Collection**: Patients describe symptoms via chatbot; AI guides follow-up questions to gather detailed info.
- **AI-Powered Diagnosis**: AI generates a preliminary diagnosis, which is reviewed by a doctor for further actions.
- **Treatment and Follow-Up**: Doctors can approve diagnoses, provide prescriptions, and suggest follow-ups. Automated reminders keep patients on track with their treatment.

## Tech Stack
- **Frontend**: Built with Next.js
- **Backend**: Developed on Django
- **AI**: LLM fine-tuning and prompt engineering for health data

## Challenges
Limited resources (device capability, internet access) made fine-tuning the AI challenging. We optimized our approach with PERT and LoRA but ultimately relied on prompt engineering for the MVP.

## Accomplishments
Despite these challenges, we developed a working MVP in 24 hours, integrating core features across frontend, backend, and AI, with a functional prototype for both patients and doctors.

## Links

- **Frontend Project**: [GitHub - Frontend](https://github.com/anishrajpandey/mediswift)
- **Backend Project**: [GitHub - Backend](https://github.com/sh1vendra/mediswiftbackend.git)
- **Doctor Dashboard**: [Dashboard](https://mediswift.tech/doctordashboard), [Report View](https://mediswift.tech/reportdoctor)
- **Patient App**: [MediSwift App](https://mediswift.tech/)

## Next Steps
Our goal is to refine the MVP and fine-tune the AI with extensive health data to support more conditions. We plan to release a full prototype for user testing within three months.
Collapse
message.txt
3 KB
﻿
# MediSwift

MediSwift is an AI-powered health assistant designed to streamline the end-to-end treatment process for patients and doctors. By automating tasks, MediSwift reduces wait times and costs, offering accessible, timely, and affordable healthcare.

## Inspiration
After a personal experience with delayed treatment and high costs, we realized the need for a more efficient, affordable healthcare solution. MediSwift aims to bridge this gap by digitalizing and automating treatment processes with AI, enabling timely and cost-effective care, especially for those abroad or with limited healthcare access.

## Features
- **Symptom Collection**: Patients describe symptoms via chatbot; AI guides follow-up questions to gather detailed info.
- **AI-Powered Diagnosis**: AI generates a preliminary diagnosis, which is reviewed by a doctor for further actions.
- **Treatment and Follow-Up**: Doctors can approve diagnoses, provide prescriptions, and suggest follow-ups. Automated reminders keep patients on track with their treatment.

## Tech Stack
- **Frontend**: Built with Next.js
- **Backend**: Developed on Django
- **AI**: LLM fine-tuning and prompt engineering for health data

## Challenges
Limited resources (device capability, internet access) made fine-tuning the AI challenging. We optimized our approach with PERT and LoRA but ultimately relied on prompt engineering for the MVP.

## Accomplishments
Despite these challenges, we developed a working MVP in 24 hours, integrating core features across frontend, backend, and AI, with a functional prototype for both patients and doctors.

## Links

- **Frontend Project**: [GitHub - Frontend](https://github.com/anishrajpandey/mediswift)
- **Backend Project**: [GitHub - Backend](https://github.com/sh1vendra/mediswiftbackend.git)
- **Doctor Dashboard**: [Dashboard](https://mediswift.tech/doctordashboard), [Report View](https://mediswift.tech/reportdoctor)
- **Patient App**: [MediSwift App](https://mediswift.tech/)

## Next Steps
Our goal is to refine the MVP and fine-tune the AI with extensive health data to support more conditions. We plan to release a full prototype for user testing within three months.
message.txt
3 KB

- Assets used from freepik.com
