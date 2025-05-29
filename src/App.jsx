import React from "react"

export const Component = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full bg-white">
        <div className="w-full bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Choose the right plan for your team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with Jira Software for free. Scale up as your team grows.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-lg p-1 shadow-sm border">
                <div className="flex">
                  <button className="px-6 py-3 rounded-md bg-primary-600 text-white font-medium transition-all hover:bg-primary-700">
                    Monthly
                  </button>
                  <button className="px-6 py-3 rounded-md text-gray-600 font-medium transition-all hover:bg-gray-100">
                    1Year
                  </button>
                  <button className="px-6 py-3 rounded-md text-gray-600 font-medium transition-all hover:bg-gray-100">
                    2Years
                  </button>
                  <button className="px-6 py-3 rounded-md text-gray-600 font-medium transition-all hover:bg-gray-100">
                    3Years
                  </button>
                  <button className="px-6 py-3 rounded-md text-gray-600 font-medium transition-all hover:bg-gray-100">
                    4Years
                  </button>
                  <button className="px-6 py-3 rounded-md text-gray-600 font-medium transition-all hover:bg-gray-100">
                    5Years
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 border shadow-sm hover:shadow-md transition-all">
                <label htmlFor="printers" className="block text-gray-700 font-medium mb-2">
                  Number of Printers
                </label>
                <div className="flex items-center">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-l-md flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-xl">remove</span>
                  </button>
                  <input
                    type="number"
                    id="printers"
                    min="0"
                    className="w-20 h-10 text-center border-t border-b text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    defaultValue="1"
                  />
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-r-md flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-xl">add</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border shadow-sm hover:shadow-md transition-all">
                <label htmlFor="mfps" className="block text-gray-700 font-medium mb-2">
                  Number of MFP's
                </label>
                <div className="flex items-center">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-l-md flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-xl">remove</span>
                  </button>
                  <input
                    type="number"
                    id="mfps"
                    min="0"
                    className="w-20 h-10 text-center border-t border-b text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    defaultValue="0"
                  />
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-r-md flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-xl">add</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white rounded-lg border-2 border-primary-500 p-8 relative hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                  <p className="text-gray-600 mb-4">For small teams</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$7.75</span>
                    <span className="text-gray-600 ml-2">per user/month</span>
                  </div>
                  <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 transition-colors">
                    Try free for 7 days
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">Up to 35,000 users</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">250GB storage</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">Standard support</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">User roles and permissions</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border-2 border-primary-500 p-8 relative hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                  <p className="text-gray-600 mb-4">For small teams</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$7.75</span>
                    <span className="text-gray-600 ml-2">per user/month</span>
                  </div>
                  <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 transition-colors">
                    Try free for 7 days
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">Up to 35,000 users</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">250GB storage</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">Standard support</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">User roles and permissions</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border-2 border-primary-500 p-8 relative hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                  <p className="text-gray-600 mb-4">For small teams</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$7.75</span>
                    <span className="text-gray-600 ml-2">per user/month</span>
                  </div>
                  <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 transition-colors">
                    Try free for 7 days
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">Up to 35,000 users</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">250GB storage</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">Standard support</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">User roles and permissions</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border-2 border-primary-500 p-8 relative hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                  <p className="text-gray-600 mb-4">For small teams</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$7.75</span>
                    <span className="text-gray-600 ml-2">per user/month</span>
                  </div>
                  <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 transition-colors">
                    Try free for 7 days
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">Up to 35,000 users</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">250GB storage</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">Standard support</span>
                  </div>
                  <div className="flex items-start">
                    <span className="material-symbols-outlined text-green-500 mr-3 text-lg">
                      check
                    </span>
                    <span className="text-gray-600">User roles and permissions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
              <div className="max-w-4xl mx-auto space-y-4">
                <details className="bg-white border border-gray-200 rounded-lg">
                  <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      What happens when my free trial ends?
                    </span>
                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    When your free trial ends, you'll be prompted to choose a paid plan to continue
                    using Jira Software. You can also downgrade to our Free plan which supports up
                    to 10 users.
                  </div>
                </details>

                <details className="bg-white border border-gray-200 rounded-lg">
                  <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      Can I change my plan at any time?
                    </span>
                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect
                    immediately for upgrades, or at the end of your billing cycle for downgrades.
                  </div>
                </details>

                <details className="bg-white border border-gray-200 rounded-lg">
                  <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      Is there a limit to how many projects I can create?
                    </span>
                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    No, there's no limit to the number of projects you can create on any of our paid
                    plans. The Free plan allows unlimited projects for up to 10 users.
                  </div>
                </details>

                <details className="bg-white border border-gray-200 rounded-lg">
                  <summary className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      Do you offer discounts for nonprofits?
                    </span>
                    <span className="material-symbols-outlined text-gray-400">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    Yes, we offer 75% discounts for qualifying nonprofit organizations and academic
                    institutions. Contact our sales team to learn more about eligibility
                    requirements.
                  </div>
                </details>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join millions of users who trust Jira Software for project management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Try free for 7 days
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  Contact sales
                </button>
              </div>
              {/* Next: "Add customer testimonials section" */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
