const posts = [
  {
    id: 1,
    title:
      "Wings of Hope: The Volunteers Restoring Wetlands for Migratory Birds",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Feb 17, 2025",
    datetime: "2020-03-16",
    category: { title: "Wildlife Preservation", href: "#" },
    author: {
      name: "Tatiana Gerzenstein",
      role: "Nature Writer",
      href: "#",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1723921243624-cac14c80a428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBob3RvZ3JhcGVyfGVufDB8fDB8fHww",
    },
  },
  {
    id: 2,
    title: "Saving the Philippine Eagle: One Forest at a Time",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Feb 10, 2025",
    datetime: "2020-03-16",
    category: { title: "Conservation", href: "#" },
    author: {
      name: "Tatiana Gerzenstein",
      role: "Nature Writer",
      href: "#",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1723921243624-cac14c80a428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBob3RvZ3JhcGVyfGVufDB8fDB8fHww",
    },
  },
  {
    id: 3,
    title: "The Birdwatchers Protecting Habitats Worldwide",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Feb 8, 2025",
    datetime: "2020-03-16",
    category: { title: "Birdwatching & Activism", href: "#" },
    author: {
      name: "Tatiana Gerzenstein",
      role: "Nature Writer",
      href: "#",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1723921243624-cac14c80a428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBob3RvZ3JhcGVyfGVufDB8fDB8fHww",
    },
  },
];

export const Blog = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-800">
            Discover inspiring stories, expert tips, and the latest insights on
            bird conservation, music, and more. Explore our blog and stay
            connected with the world you love.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
