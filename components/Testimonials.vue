<template>
  <div class="py-20 bg-secondary-dark">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p
          class="
            text-base
            leading-6
            text-white
            font-semibold
            tracking-wide
            uppercase
            ubuntu-500
          "
        >
          What our customers are saying
        </p>
        <h2
          class="
            mt-12
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            sm:text-4xl sm:leading-10
            text-white
            ubuntu-700
          "
        >
          We help our customers to get a competitive edge through
          <span class="text-red">cloud technology</span> so they can innovate
          faster
        </h2>
      </div>

      <section>
        <div
          class="max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8"
        >
          <div
            class="
              py-12
              px-4
              sm:px-6
              md:flex md:flex-col md:py-16 md:pl-0 md:pr-10
              lg:pr-16
            "
          >
            <blockquote
              class="
                mt-8
                md:flex-grow md:flex md:flex-col
                bg-red
                rounded-3xl
                p-7
                relative
                message-icons
              "
            >
              <div class="md:flex-shrink-0 mb-5">
                <img
                  src="~/assets/img/clients/amatus-logo-gray.svg"
                  class="h-8 mx-auto md:m-0"
                />
              </div>
              <div
                class="
                  relative
                  text-lg
                  leading-7
                  font-medium
                  text-white
                  md:flex-grow
                "
              >
                <p
                  class="
                    relative
                    text-white
                    pl-0
                    text-base
                    font-thin
                    ubuntu-300
                  "
                >
                  Leveraging the reusable infrastructure components that are
                  provided by Mineiros is an incredible help for us. Building on
                  top of their library allowed us to migrate to AWS in just a
                  few days while incorporating all kinds of best practices such
                  as infrastructure as code, immutable infrastructure,
                  continuous integration, continuous delivery, containerization,
                  load balancing, auto-scaling, monitoring, security, etc.
                  Minerios is a strong and recommendable partner to work with.
                </p>
              </div>
            </blockquote>
            <footer class="mt-8">
              <div class="flex justify-center">
                <div
                  class="
                    flex-shrink-0
                    inline-flex
                    rounded-full
                    border-2 border-white
                  "
                >
                  <img
                    class="h-12 w-12 rounded-full"
                    src="~/assets/img/testimonials/andreasbichler.jpeg"
                    alt="Andreas Bichler, CEO of Amatus"
                  />
                </div>
                <div class="ml-4">
                  <div
                    class="
                      text-base
                      leading-6
                      font-medium
                      text-white
                      ubuntu-700
                    "
                  >
                    Andreas Bichler
                  </div>
                  <div
                    class="leading-6 font-medium text-white text-xs ubuntu-300"
                  >
                    CEO, Amatus GmbH
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <div
            class="
              py-12
              px-4
              sm:px-6
              md:flex md:flex-col md:py-16 md:pl-0 md:pr-10
              lg:pr-16
            "
          >
            <blockquote
              class="
                mt-8
                md:flex-grow md:flex md:flex-col
                bg-red
                rounded-3xl
                p-7
                relative
                message-icons
              "
            >
              <div class="md:flex-shrink-0 mb-5">
                <img
                  src="~/assets/img/clients/resonanz-logo-gray.svg"
                  class="h-8 mx-auto md:m-0"
                />
              </div>
              <div
                class="
                  relative
                  text-lg
                  leading-7
                  font-medium
                  text-white
                  md:flex-grow
                "
              >
                <p
                  class="
                    relative
                    text-white
                    pl-0
                    text-base
                    font-thin
                    ubuntu-300
                  "
                >
                  Resonanz is a company that focuses on the energy industry. Our
                  infrastructure must be secure and reliable. We are using the
                  infrastructure as code library provided by Minerios to deploy
                  complex cloud infrastructure such as Kubernetes clusters, data
                  pipelines, and microservices without investing many hours in
                  engineering or researching best practices. Also, the advice,
                  training, and ongoing support from the Mineiros team has been
                  excellent.
                </p>
              </div>
            </blockquote>
            <footer class="mt-8">
              <div class="flex justify-center">
                <div
                  class="
                    flex-shrink-0
                    inline-flex
                    rounded-full
                    border-2 border-white
                  "
                >
                  <img
                    class="h-12 w-12 rounded-full"
                    src="~/assets/img/testimonials/yiqunli.jpeg"
                    alt="Yiqun Liu, COO of Resonanz"
                  />
                </div>
                <div class="ml-4">
                  <div
                    class="
                      text-base
                      leading-6
                      font-medium
                      text-white
                      ubuntu-700
                    "
                  >
                    Yiqun Liu
                  </div>
                  <div
                    class="leading-6 font-medium text-white text-xs ubuntu-300"
                  >
                    COO, Resonanz
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
