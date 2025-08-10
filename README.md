# React-Todo-
Todo-App to manage daily task

1. How I Handle Verb Validation
   
When a user adds a task, the app checks that the description includes at least one action verb from a list I chose, like “create,” “fix,” or “call.” This means that the user must type something that describes a real action, not just a vague reminder or topic. For example, saying “fix homepage bug” is accepted because it includes the verb “fix,” but writing “homepage bug” alone is rejected because it doesn’t tell you what you should do about the bug.
The verb check happens every time someone tries to add a task. The app looks through the sentence to see if it contains any of the approved verbs, and it doesn’t care if the user used uppercase or lowercase letters. If none of the verbs are found, the app gives a friendly warning asking for an action verb before the task can be added.
In short: every task must say what you need to do, not just what you’re thinking about.

2. Why Tasks Are Grouped This Way
   
Tasks in my app are divided into “Pending” and “Completed,” which helps users stay organized and focused. I put the “Pending Tasks” at the top of the list, because those are the things the user still needs to do. This puts the most important information first, so you always know what’s left without searching for it.
“Completed Tasks” are kept below the pending ones. This lets users quickly see what’s been finished while keeping the focus on active work. I also sort both lists by time: for pending tasks, the most recent ones appear first, and for completed tasks, the ones you finished most recently show up at the top. This means users see new work and their latest progress without scrolling around.
This grouping matches how people work: focus first on unfinished tasks, then keep completed ones visible for reference or review.

3. One Thing I Tried That Didn’t Work
   
One idea I tried was using a technique called regular expressions to automatically search for verbs inside every word in a sentence. At first, this seemed smart—it could find “fix” anywhere, but it ended up causing problems. The app would sometimes think that words like “prefix” or “creative” included banned or accepted verbs just because they share a few letters. So, someone writing “creative ideas” would accidentally pass the verb check because “create” is inside “creative,” even though it wasn’t actually meant as an action.
This made the verb validation unreliable and confusing for users, so I changed my strategy. Now, the app checks for full verbs more deliberately and avoids incorrect matches, resulting in a much better user experience.

Summary:
The app only lets users add tasks that describe real actions—checked using a custom verb list. Tasks are neatly separated into “pending” and “completed,” always sorted so the newest or most recent are at the top for easy tracking. I learned the hard way that being too clever with text searching causes trouble, so I kept the system simple and clear for everyone.
If you want these as paragraphs for your README, copy-paste and you’re good to go! If you’d like a cover introduction or conclusion, just let me know.
