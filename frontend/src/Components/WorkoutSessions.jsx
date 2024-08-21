import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Gym and fitness play a crucial role in promoting a healthy lifestyle by offering structured environments for individuals to work on their physical health.
          Gyms provide access to various equipment, such as treadmills, weights, and resistance machines, that cater to different types of workouts, including cardiovascular exercises,
          strength training, and flexibility routines. Regular gym attendance helps improve muscle tone, endurance, and overall body composition, allowing individuals to reach
          their personal fitness goals.
        </p>
        <img src="/img8.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS WORKOUTS</h1>
        <p>
          Engaging in consistent fitness routines is also beneficial for mental health.
          Exercise has been proven to reduce stress levels, boost mood, and improve cognitive function due to the release of endorphins, which are the body's natural "feel-good" chemicals.
          Additionally, fitness routines promote better sleep, increased energy levels, and enhanced focus, which collectively contribute to a more balanced and positive mental state.
          Many people find that sticking to a workout plan improves their confidence and self-discipline.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Squats</h4>
            <p>
              Squats target the lower body, focusing on the quads, hamstrings, glutes, and core. Stand with feet shoulder-width apart, keep your chest up, and
              lower your hips as if sitting in a chair. Ensure your knees stay aligned with your toes and avoid letting them cave in.
              Push through your heels to return to a standing position.
            </p>
          </div>
          <div>
            <h4>Bench Press</h4>
            <p>
              The bench press primarily works the chest, triceps, and shoulders. Lie on a flat bench with your feet firmly on the ground.
              Grasp the barbell with hands slightly wider than shoulder-width apart.
              Lower the bar slowly to your chest and then press it back up until your arms are fully extended.
            </p>
          </div>
          <div>
            <h4>Deadlifts</h4>
            <p>
              Deadlifts are a powerful compound exercise that targets multiple muscle groups, including the back, legs, and core. Stand with feet hip-width apart, grip the barbell,
              and hinge at your hips to lift the weight off the ground, keeping your back straight and core engaged.
              Pull the weight up until you're standing straight, then lower it back down with control.
            </p>
          </div>
          <div>
            <h4>Lat Pulldown</h4>
            <p>
              This exercise targets the upper back and lat muscles. Sit at a lat pulldown machine and grasp the bar with a wide grip.
              Pull the bar down to your chest while keeping your torso upright.
              Focus on using your back muscles rather than your arms to pull the weight down.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions;

//CSS USED WITH DIVS TO CREATE A GOOD UI
//H TAGS AND P TAGS
//IMG USED
// BOOTCAMPS // WRAPPER // WORKOUT_SESSION CLASSNAME USED FOR CSS 
//ALL IMAGES IN PUBLIC FOLDER