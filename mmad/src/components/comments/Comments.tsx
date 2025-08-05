import prof1 from './../../assets/prof1.jpg'
import prof2 from './../../assets/prof2.jpg'
import prof3 from './../../assets/prof3.jpg'
import prof4 from './../../assets/prof4.jpg'
import prof5 from './../../assets/prof5.jpg'
import prof6 from './../../assets/prof6.jpg'
import prof7 from './../../assets/prof7.jpg'

function Comments() {
  const comments = [
    { profile: prof1, comment: "the website interface was so nice", id:1 },
    { profile: prof2, comment: "Absolutely love the clean and modern design. everything feels so easy to find!", id:2 },
    { profile: prof3, comment: "The site is super fast and smooth — shopping here is a pleasure.", id:3 },
    { profile: prof4, comment: "You’ve nailed the vibe — classy, user-friendly, and fun to scroll through.", id:4 },
    { profile: prof5, comment: "Love the product variety and how neatly it’s all categorized.", id:5 },
    { profile: prof6, comment: "Whoever designed this site — bravo! Sleek, stylish, and effortless to use.", id:6 },
    { profile: prof7, comment: "This isn’t just a store, it’s an experience. I’ll definitely be back!", id:7 }
  ];
  return (
    <div>
      <div className='my-30'>
        <h2 className="flex items-center justify-center text-4xl">
          What our costomers say?
        </h2>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        {comments.map(i => <div key={i.id} className="bg-neutral-200 border border-neutral-300 shadow col-span-1 mb-10 rounded-2xl flex items-center justify-center flex-col">
            <img src={i.profile} alt="profile" className='w-30 h-30 rounded-full -mt-15'/>
            <p className='p-10'>{i.comment}</p>
        </div>)}
      </div>
    </div>
  );
}

export default Comments;
