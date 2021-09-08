<template>
  <div class="relative overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="
          relative
          z-10
          pb-8
          sm:pb-16
          md:pb-20
          lg:max-w-2xl lg:w-full lg:pb-28
          xl:pb-32
        "
      >
        <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

        <main
          class="
            mt-10
            mx-auto
            max-w-screen-xl
            px-4
            sm:mt-12 sm:px-6
            md:mt-16
            lg:mt-20 lg:px-8
            xl:mt-28
          "
        >
          <div class="sm:text-center lg:text-left">
            <h2
              class="
                text-4xl
                tracking-tight
                leading-10
                font-extrabold
                text-gray-900
                sm:text-5xl sm:leading-none
                md:text-6xl
              "
            >
              Super Startup package
              <br />
              <span class="text-red text-4xl"
                >Get up and running in no time!</span
              >
            </h2>
            <p
              class="
                mt-3
                text-base text-gray-500
                sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
                md:mt-5 md:text-xl
                lg:mx-0
              "
            >
              <!-- <img class="flex justify-center h-10 sm:h-12" src="~/assets/img/technologies/terraform.svg" alt="Terraform Logo" /> -->
              We have creating <span class="text-red">handcrafted</span> battle
              tested modules to solve common devops deployment issues, making it
              production ready with CIS compatibility to get you up and running
              in no time.
            </p>
            <h2
              class="
                text-3xl
                tracking-tight
                font-bold
                text-red
                sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
                md:mt-5 md:text-xl
                lg:mx-0
              "
            >
              Secure, Scalable, Stable
            </h2>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    leading-6
                    font-medium
                    rounded-md
                    text-white
                    bg-red
                    hover:bg-red-500
                    focus:outline-none focus:border-red-700
                    transition
                    duration-150
                    ease-in-out
                    md:py-4 md:text-lg md:px-10
                  "
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    leading-6
                    font-medium
                    rounded-md
                    text-red-700
                    bg-red-100
                    hover:text-red-600 hover:bg-red-50
                    focus:outline-none focus:border-red-300
                    transition
                    duration-150
                    ease-in-out
                    md:py-4 md:text-lg md:px-10
                  "
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="sm:object-center md:object-right lg:object-right xl:object-right"
        src="~/assets/img/illustrations/mineiros-box.svg"
        alt="startup"
      />
    </div>
  </div>
</template>
