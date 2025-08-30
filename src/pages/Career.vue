<template>
  <!-- Breadcrumb Section -->
  <Breadcrumb
    :bannerImage="bannerImage"
    pageTitle="Career"
    :breadcrumb="[
      { label: 'Home', link: '/' },
      { label: 'Career' }
    ]"
    shortDescription="Explore Careers in Software Development, UI/UX Design, Digital Marketing & Beyond"
  />

  <!-- Join Us Section -->
  <section class="w-full min-h-screen flex items-center justify-center bg-white py-16">
    <div class="max-w-5xl mx-auto px-4 text-center">
      <h1 class="text-3xl md:text-[36px] font-primary font-bold leading-snug mb-6">
        Join Auraveni Solutions — Where Innovation Meets Ambition
      </h1>
      <p class="text-base md:text-lg mb-4">
        We’re not just building software at Auraveni Solutions — we’re building the future. As a leading provider of software development, mobile app development, UI/UX design, and custom enterprise solutions, we’re always looking for passionate professionals who thrive on innovation, creativity, and problem-solving. Whether you're a developer, designer, strategist, or marketer, your career at Auraveni means being part of groundbreaking digital transformation for global clients across industries.
      </p>
      <p class="text-base md:text-lg mb-10">
        Here, you’ll work with cutting-edge technologies, contribute to impactful projects, and grow in a culture that values collaboration, integrity, and continuous learning. Our teams are empowered to lead, experiment, and make meaningful contributions — because we believe the best ideas come from within. If you're ready to take your career to the next level and be part of something truly transformative, <span class="font-bold"> Auraveni Solutions is your place to grow</span>.
      </p>
    </div>
  </section>

  <!-- Opening Jobs Section -->
  <section class="w-full bg-blue text-white py-16">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl md:text-[36px] font-primary font-bold leading-snug mb-4 text-center">
        Exciting Job Openings Available!
      </h2>
      <p class="text-lg md:text-xl text-center mb-10">
        Apply now and be part of our innovative journey!
      </p>
      <div class="divide-y divide-gray-300">
        <div v-for="job in jobs" :key="job.title" class="flex flex-col md:flex-row md:items-center py-6 gap-3 md:gap-0">
          <!-- Mobile layout -->
          <div class="block md:hidden w-full">
            <div class="font-semibold text-lg mb-1">{{ job.title }}</div>
            <div class="text-base mb-2">{{ job.type }}</div>
            <button type="button" class="font-medium hover:underline transition flex items-center gap-1" @click="openApplyNow(job.title)">
              Read More
              <img src="@/assets/icons/right-arrow-light.svg" alt="Read More" class="w-3 h-3 inline-block" />
            </button>
          </div>
          <!-- Desktop layout -->
          <div class="hidden md:block w-3/5 text-left font-semibold text-lg">{{ job.title }}</div>
          <div class="hidden md:block w-1/5 text-center text-base">{{ job.type }}</div>
          <div class="hidden md:flex w-1/5 justify-end">
            <button type="button" class="font-medium hover:underline transition flex items-center gap-1" @click="openApplyNow(job.title)">
              Read More
              <img src="@/assets/icons/right-arrow-light.svg" alt="Read More" class="w-3 h-3 inline-block" />
            </button>
          </div>
        </div>
      </div>
      <!-- Section-wide Apply Now Button -->
      <div class="flex justify-center mt-10">
        <button type="button" class="px-4 py-2 bg-white text-black rounded shadow transition uppercase" @click="openApplyNow('')">
          Apply Now
        </button>
      </div>
    </div>
  </section>

  <!-- Floating Apply Now Form -->
  <div class="fixed bottom-0 right-0 z-[100] w-full max-w-md bg-white text-dark shadow-2xl rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-br-none transition-transform duration-300" :class="{ 'translate-y-full md:translate-x-full': !showApplyNow }" style="max-width: 420px;" ref="applyNowFormContainer">
    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <h3 class="text-2xl font-bold font-primary">Apply Now</h3>
      <button type="button" class="text-2xl font-bold text-gray-500 hover-text-red focus:outline-none" @click="closeApplyNow">&times;</button>
    </div>
    <form class="px-6 py-6 space-y-5" @submit.prevent="submitApplyNow" ref="applyNowForm">
      <div>
        <input type="text" name="name" placeholder="Full Name *" required v-model="applyNowData.name" class="w-full bg-transparent border-b border-gray-400 text-dark placeholder-gray-500 py-2 focus:outline-none" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email *" required v-model="applyNowData.email" class="w-full bg-transparent border-b border-gray-400 text-dark placeholder-gray-500 py-2 focus:outline-none" />
      </div>
      <div class="relative">
        <input id="apply-now-phone" name="mobile" type="tel" placeholder="Mobile *" required v-model="applyNowData.mobile" class="w-full bg-transparent border-b border-gray-400 text-dark placeholder-gray-500 py-2 focus:outline-none pr-10" style="width:100% !important;" inputmode="numeric" pattern="[0-9]*" />
      </div>
      <div class="relative">
        <select name="designation" id="apply-now-designation" required v-model="applyNowData.designation" class="w-full bg-transparent border-b border-gray-400 text-dark placeholder-gray-500 py-2 focus:outline-none appearance-none pr-10">
          <option value="" disabled selected>Select Designation *</option>
          <option value="Frontend Developer (React.js)">Frontend Developer (React.js)</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Digital Marketing Executive">Digital Marketing Executive</option>
          <option value="Backend Developer (Node.js)">Backend Developer (Node.js)</option>
          <option value="Content Writer">Content Writer</option>
          <option value="Other">Other</option>
        </select>
        <span class="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
        <path d="M6 8l4 4 4-4" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      <div>
        <label class="block text-sm mb-1 text-gray-600">Add Attachment *</label>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" required @change="onResumeChange" class="w-full bg-transparent border-b border-gray-400 text-dark placeholder-gray-500 py-2 focus:outline-none file:mr-3 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700" />
      </div>
      <div>
        <textarea name="message" placeholder="Message *" required v-model="applyNowData.message" class="w-full bg-transparent border-b border-gray-400 text-dark placeholder-gray-500 py-2 focus:outline-none resize-none"></textarea>
      </div>
      <button type="submit" class="w-full px-6 py-2 bg-red text-white uppercase rounded shadow hover:bg-[#AC3B61] transition">Submit</button>
      <div v-if="successMsg" class="mt-3 text-green text-center">{{ successMsg }}</div>
      <div v-if="errorMsg" class="mt-3 text-red text-center">{{ errorMsg }}</div>
    </form>
  </div>

  <Enquiry 
  testimonialBgColor="bg-white"
  formClass="bg-[#F2f2f2] text-dark"
  inputClass="border-gray-800 text-dark placeholder-gray-500"
  buttonClass="bg-red text-white hover:bg-yellow"
  />
</template>

<script setup lang="ts">
const jobs = [
  { title: 'Frontend Developer (React.js)', type: 'Full Time' },
  { title: 'UI/UX Designer', type: 'Full Time' },
  { title: 'Digital Marketing Executive', type: 'Half Time' },
  { title: 'Backend Developer (Node.js)', type: 'Full Time' },
  { title: 'Content Writer', type: 'Half Time' },
];
import { ref, nextTick, onMounted } from 'vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Enquiry from '@/components/Enquiry.vue';
import bannerImage from '@/assets/images/blog-banner.webp';

const showApplyNow = ref(false);
const successMsg = ref('');
const errorMsg = ref('');
const applyNowForm = ref<HTMLFormElement | null>(null);
const applyNowFormContainer = ref<HTMLElement | null>(null);
const applyNowData = ref({
  name: '',
  email: '',
  mobile: '',
  designation: '',
  message: '',
  resume: null as File | null,
});

function openApplyNow(designation: string) {
  errorMsg.value = '';
  successMsg.value = '';
  showApplyNow.value = true;
  nextTick(async () => {
    if (applyNowForm.value) {
      applyNowForm.value.reset();
    }
    applyNowData.value.designation = designation || '';
    applyNowData.value.name = '';
    applyNowData.value.email = '';
    applyNowData.value.mobile = '';
    applyNowData.value.message = '';
    applyNowData.value.resume = null;
    await loadIntlTelInputScript();
    const input = document.getElementById('apply-now-phone');
    if (input && window.intlTelInput) {
      window.intlTelInput(input, {
        initialCountry: 'in',
        nationalMode: true,
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js',
      });
      input.setAttribute('maxlength', '10');
      input.addEventListener('countrychange', () => {
        const iti = window.intlTelInputGlobals.getInstance(input);
        if (iti) {
          const countryData = iti.getSelectedCountryData();
          let maxLen = '';
          if (countryData.iso2 === 'in') {
            maxLen = '10';
          } else if (countryData && countryData.dialCode) {
            if (window.intlTelInputUtils && window.intlTelInputUtils.getExampleNumber) {
              try {
                const example = window.intlTelInputUtils.getExampleNumber(countryData.iso2, true, window.intlTelInputUtils.numberType.MOBILE);
                if (example) {
                  maxLen = example.replace(/\D/g, '').length.toString();
                }
              } catch (e) {}
            }
          }
          if (maxLen) {
            input.setAttribute('maxlength', maxLen);
          } else {
            input.removeAttribute('maxlength');
          }
        }
      });
    }
  });
}

function closeApplyNow() {
  showApplyNow.value = false;
  errorMsg.value = '';
  successMsg.value = '';
}

function onResumeChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const files = target?.files;
  if (files && files.length > 0) {
    applyNowData.value.resume = files[0];
  } else {
    applyNowData.value.resume = null;
  }
}

async function submitApplyNow() {
  successMsg.value = '';
  errorMsg.value = '';
  if (
    !applyNowData.value.name ||
    !applyNowData.value.email ||
    !applyNowData.value.mobile ||
    !applyNowData.value.designation ||
    !applyNowData.value.message ||
    !applyNowData.value.resume
  ) {
    errorMsg.value = 'Please fill all required fields.';
    return;
  }
  const phoneInput = document.getElementById('apply-now-phone') as HTMLInputElement | null;
  let iti = null;
  let internationalNumber = '';
  if (phoneInput && window.intlTelInput && window.intlTelInputGlobals) {
    iti = window.intlTelInputGlobals.getInstance(phoneInput);
    if (iti) {
      if (typeof iti.isValidNumber === 'function' && !iti.isValidNumber()) {
        errorMsg.value = 'Please enter a valid mobile number.';
        return;
      }
      if (typeof iti.getNumber === 'function') {
        internationalNumber = iti.getNumber();
      }
      const userInput = phoneInput.value;
      const countryData = iti.getSelectedCountryData();
      let expectedLen = '';
      if (countryData.iso2 === 'in') {
        expectedLen = '10';
      } else if (countryData && countryData.dialCode) {
        if (window.intlTelInputUtils && window.intlTelInputUtils.getExampleNumber) {
          try {
            const example = window.intlTelInputUtils.getExampleNumber(countryData.iso2, true, window.intlTelInputUtils.numberType.MOBILE);
            if (example) {
              expectedLen = example.replace(/\D/g, '').length.toString();
            }
          } catch (e) {}
        }
      }
      if (expectedLen) {
        if (userInput.length !== parseInt(expectedLen)) {
          errorMsg.value = `Mobile number must be exactly ${expectedLen} digits for the selected country.`;
          return;
        }
      }
      applyNowData.value.mobile = userInput;
    }
  }
  const formData = new FormData();
  formData.append('name', applyNowData.value.name);
  formData.append('email', applyNowData.value.email);
  formData.append('mobile', internationalNumber || applyNowData.value.mobile);
  formData.append('designation', applyNowData.value.designation);
  formData.append('message', applyNowData.value.message);
  if (applyNowData.value.resume) {
    formData.append('resume', applyNowData.value.resume);
  }
  try {
    // await fetch('/api/career/apply', {
    //   method: 'POST',
    //   body: formData,
    // });
    successMsg.value = 'Your application has been submitted! One of our team members will contact you shortly.';
    if (applyNowForm.value) {
      applyNowForm.value.reset();
    }
    applyNowData.value.name = '';
    applyNowData.value.email = '';
    applyNowData.value.mobile = '';
    applyNowData.value.designation = '';
    applyNowData.value.message = '';
    applyNowData.value.resume = null;
  } catch (e) {
    errorMsg.value = 'There was an error submitting your application. Please try again.';
  }
}

function loadIntlTelInputScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).intlTelInput) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/intl-tel-input.min.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
}

onMounted(() => {
  document.addEventListener('mousedown', (e) => {
    if (!applyNowFormContainer.value) return;
    if (
      !applyNowFormContainer.value.contains(e.target as Node) &&
      showApplyNow.value
    ) {
      const itiDropdown = document.querySelector('.iti__country-list');
      if (itiDropdown && itiDropdown.contains(e.target as Node)) return;
      closeApplyNow();
    }
  });
});
</script>