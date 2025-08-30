<template>
<!-- Breadcrumb Section -->
  <Breadcrumb
    :bannerImage="bannerImage"
    pageTitle="Flutter Developer"
    :breadcrumb="[
      { label: 'Home', link: '/' },
      { label: 'Careers', link: '/careers' },
      { label: 'Flutter Developer', link: '/careers/flutter-developer' }
    ]"
    shortDescription="We’re Hiring Flutter Developers — Create Stunning Mobile Experiences"
  />
  
  <!-- Join Us Section -->
  <section class="w-full flex items-center justify-center bg-white py-16">
      <div class="max-w-5xl mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-[36px] font-primary font-bold leading-snug mb-6">
          Join Vervebytes Technologies as a Flutter Developer!
        </h1>
        <p class="text-base md:text-lg mb-4">
          We are looking for a passionate and skilled Flutter Developer to join our growing team at Auraveni Solutions, Kolkata. If you’re someone who lives and breathes cross-platform mobile development, and wants to build high-performance, beautiful apps that scale — this role is for you.
        </p>
        <p class="text-base md:text-lg mb-6">
          As a Flutter Developer, you’ll be responsible for developing, testing, and maintaining applications for both Android and iOS platforms using Flutter and Dart. You’ll collaborate with UI/UX designers, backend developers, and project managers to build seamless digital experiences for our clients across industries.
        </p>

        <!-- <a href="#contact" class="inline-block px-6 py-3 bg-red button-secondary text-white rounded hover:bg-yellow transition uppercase">
          Partner With Us
        </a> -->

      </div>
  </section>

  <!-- Desired Qualities Section -->
  <section class="w-full bg-light pt-16 pb-8">
    <div class="max-w-3xl mx-auto px-4">
      <!-- Title -->
      <h2 class="text-2xl md:text-[28px] font-primary font-bold text-gray-900 mb-4">
        Desired Qualities:
      </h2>
      <!-- Bullets -->
      <ul class="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-3">
        <li>Develop and maintain cross-platform mobile applications using Flutter and Dart.</li>
        <li>Experience with other front-end frameworks (e.g., Angular, Vue.js).</li>
        <li>Write clean, maintainable, and well-documented code following best practices.</li>
        <li>Integrate RESTful APIs and third-party libraries into mobile apps.</li>
        <li>Test, debug, and optimize app performance for Android and iOS devices.</li>
        <li>Previous experience with cloud platforms (e.g., AWS, Azure).</li>
        <li>Understanding of containerization and orchestration (e.g., Docker, Kubernetes).</li>
      </ul>
    </div>
  </section>

  <!-- Skills Required Section -->
  <section class="w-full bg-light py-8">
    <div class="max-w-3xl mx-auto px-4">
      <!-- Title -->
      <h2 class="text-2xl md:text-[28px] font-primary font-bold text-gray-900 mb-4">
        Skills Required:
      </h2>
      <!-- Bullets -->
      <ul class="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-3">
        <li>Flutter</li>
        <li>Native Android</li>
        <li>Laravel</li>
      </ul>
    </div>
  </section>

  <!-- Requirements Section -->
  <section class="w-full bg-light py-8">
    <div class="max-w-3xl mx-auto px-4">
      <!-- Title -->
      <h2 class="text-2xl md:text-[28px] font-primary font-bold text-gray-900 mb-4">
        Requirements:
      </h2>
      <!-- Bullets -->
      <ul class="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-3">
        <li>Experience as a Full Stack Developer with Flutter and PHP Laravel.</li>
        <li>Strong skills in JavaScript, React, and React Native.</li>
        <li>Familiarity with PHP (Laravel), HTML, CSS, and JavaScript.</li>
        <li>Familiarity with databases such as MySQL, PostgreSQL, Redis, MongoDB, and web servers like Apache and Nginx.</li>
        <li>Understanding of application APIs (REST and WebSocket) and third-party service integration.</li>
        <li>Proficient with GitHub or GitLab.</li>
        <li>Ability to write testable code; knowledge of CI/CD is a plus.</li>
        <li>Excellent problem-solving and debugging skills.</li>
        <li>Strong communication and teamwork abilities.</li>
        <li>Working knowledge of Cloud will be an added advantage.</li>
        <li>Quick learner with great attention to detail.</li>
        <li>Strong organizational skills.</li>
        <li>Cooperative attitude with colleagues and a willingness to learn new things.</li>
        <li>Comfortable in an Agile/Scrum environment.</li>
      </ul>
    </div>
  </section>

  <!-- Responsibilities Section -->
  <section class="w-full bg-light py-8">
    <div class="max-w-3xl mx-auto px-4">
      <!-- Title -->
      <h2 class="text-2xl md:text-[28px] font-primary font-bold text-gray-900 mb-4">
        Responsibilities:
      </h2>
      <!-- Bullets -->
      <ul class="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-3">
        <li>Build and maintain web and mobile applications using Flutter and PHP Laravel.</li>
        <li>Work closely with designers, product managers, and fellow developers to deliver high-quality software solutions.</li>
        <li>Generate scalable and easily manageable code for both front-end and back-end, with a focus on performance and responsiveness.</li>
        <li>Ensure seamless application performance across various devices and platforms.</li>
        <li>Integrate user interface elements through server-side logic to optimize overall performance.</li>
        <li>Write efficient and reusable code to facilitate future development.</li>
        <li>Participate in code reviews, contribute to team knowledge sharing, and maintain high-quality, scalable code.</li>
        <li>Identify and fix issues and bugs quickly.</li>
        <li>Stay updated on industry trends and tech.</li>
      </ul>
    </div>
  </section>

  <!-- Years of Experience Section -->
  <section class="w-full bg-light py-8">
    <div class="max-w-3xl mx-auto px-4">
      <!-- Title -->
      <h2 class="text-2xl md:text-[28px] font-primary font-bold text-gray-900 mb-4">
        Years of Experience:
      </h2>
      <!-- Bullets -->
      <ul class="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-3">
        <li>2 Years or above</li>
      </ul>
    </div>
  </section>

  <!-- Section-wide Apply Now Button -->
  <div class="flex justify-center pt-10 pb-16">
    <button type="button" class="px-4 py-2 bg-blue text-white rounded shadow transition uppercase" @click="openApplyNow('Flutter Developer')">
      Apply Now
    </button>
  </div>

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
        <select
          name="designation"
          id="apply-now-designation"
          required
          v-model="applyNowData.designation"
          class="w-full bg-transparent border-b border-gray-400 text-dark placeholder-gray-500 py-2 focus:outline-none appearance-none pr-10">
          <option value="" disabled>Select Designation *</option>
          <option value="Flutter Developer">Flutter Developer</option>
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

  <Enquiry />


</template>
<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue';
const jobs = [
  { title: 'Flutter Developer', type: 'Full Time' },
  { title: 'Frontend Developer (React.js)', type: 'Full Time' },
  { title: 'UI/UX Designer', type: 'Full Time' },
  { title: 'Digital Marketing Executive', type: 'Half Time' },
  { title: 'Backend Developer (Node.js)', type: 'Full Time' },
  { title: 'Content Writer', type: 'Half Time' },
];
import bannerImage from '@/assets/images/careers/flutter-banner.webp';
import Breadcrumb from '@/components/Breadcrumb.vue';
import Enquiry from '@/components/Enquiry.vue';

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
