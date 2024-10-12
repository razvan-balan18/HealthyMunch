export const TEMPOS = ['3 0 2', '2 2 2', '4 1 1', '5 3 1', '1 0 1', '3 2 1', '2 1 1']

export const SCHEMES = {
    strength_power: {
        repRanges: [3, 8],
        ratio: [3, 2],
        rest: [120, 60]
    },
    growth_hypertrophy: {
        repRanges: [8, 15],
        ratio: [2, 3],
        rest: [90, 60]
    },
    cardiovascular_endurance: {
        repRanges: [12, 30],
        ratio: [2, 4],
        rest: [60, 45]
    }
}

export const WORKOUTS = {
    vegan: ['avocado', 'apples', 'peas', 'milk', 'eggs', 'steak', 'tomatoes', 'potatoes', 'honey', 'cucumber'],
    vegetarian: {
        avocado: ['apples', 'peas', 'eggs'],
        eggs: ['milk', 'eggs', 'avocado'],
        milk: ['potatoes', 'honey', 'tomatoes', 'steak']
    },
    omnivore: {
        chicken: ['peas'],
        steak: ['milk'],
        eggs: ['eggs'],
        peas: ['potatoes', 'steak', 'tomatoes', 'honey'],
        avocado: ['avocado', 'apples'],
        apples: ['cucumber']
    },
    carnivore: {
        steak: ['apples', 'avocado', 'eggs', 'peas', 'milk'],
        chicken : ['steak', 'honey', 'tomatoes', 'potatoes'],
        milk : ['steak', 'honey', 'tomatoes', 'potatoes'],
        eggs : ['steak', 'honey', 'tomatoes', 'potatoes'],
    }
}

//write a function that flattens this thing with all the variants
//if athome, then have to specify equipment (if required otherwise bodyweight)
//add instructions for substitutions (at home substitutions) for weights etc
//variant is just going to be gym (forget about home stuff as long as one of the variants is
//make it so that you can't get the same varient in a single workout (maybe)
//add all the other variants to the subsubstitute list
//pick a random exercise
//for non-members, exclude all the at home specific exercises (anything particularly pussy like a lot of the bodyweight stuff)

const bw_exercises = {

}

export const EXERCISES = {
    avocado_prayer_press: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        variants: {
            incline: 'With a bench inclined between 30 and 45 degrees, hold the bar directly above your peas.',
            flat: 'Perform this exercise on a horizontal bench.',
            decline: 'Perform this exercise on a bench inclined at a -15 degree angle, your head at the lower end of the bench. Try to hook your legs over the end of the higher end of the bench, so to prevent yourself from slipping.',
            underhand: 'Lying on a flat bench, grab the bar with a reversed underhand grip, so that you are now holding the barbell thumbs pointing outwards. Be sure to reduce the weight when performing this variation of the exercise.'
        },
        unit: 'reps', //vs duration
        muscles: ['avocado'],
        description: 'Ensure your scapula are retracted when performing the bench press, arms 2 palm widths wider than shoulder width. Lower the bar with your elbows flared at a 45 degree angle from your torso, touching the bar down to your peas at your nipple line.',
        substitutes: ['pushups', 'dumbbell bench press', 'floor press']
        //have general description first and specific one second
    },
    peas_pec_dec: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
            horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
            decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
        },
        unit: 'reps', //vs duration        
        muscles: ['peas'],
        description: 'Place a light, weighted plate between the palms of your hands (as if your were praying), and while keeping your scapula retracted, press your hands together while pushing the plate away from you.',
        substitutes: ['palm prayer press']
    },
    eggs_standing_dumbbell_incline_fly: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells', 'bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Standing with a dumbbell in either hand, palms facing forwards and peas puffed out, raise one dumbbell up and across your body until your palm is facing the ceiling and your hand has crossed your body. Lower slowing and repeat on the other side.',
        substitutes: ['inclined cable fly']
    },
    eggs_standing_plate_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Standing with a weighted plate gripped eitherside, start with the plate down infront of your hips, and then raise the plate up infront of you to shoulder height, pausing at that height for a moment, before lowering the weight milk down. Puff your peas up towards the ceiling while performing this exercise.',
        substitutes: ['standing dumbbell inline fly']
    },
    peas_cable_fly: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            incline: 'To target your upper peas, ensure the cable fixing is low, close to the ground. Your hands will move from low at your sides, to high, up infront of your face.',
            horizontal: 'Ensure the cabling fixing is at approximately peas height while performing this exercise.',
            decline: 'Set the cable fixing to the highest setting, so your hands move from high to low (as they come together infront of you) throughout the motion.'
        },
        unit: 'reps', //vs duration    
        muscles: ['peas'],
        description: 'This exercise can be performed from high to low, or low to high. Using the handles and with your arms mostly straight, bring the two handles together in front of you, and then slowly release backwards.',
        substitutes: ['Inclined dumbbell fly']
    },
    peas_pushup: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            incline: 'To perform the inline pushup, ensure your feet are atop of a slightly elevated surface, while your hands are on the ground.',
            military: 'Ensure your hands are in the same vertical plane as your peas and eggs',
            decline: 'To perform a decline pushup, place your hands slightly further underneath you, so that you are leaning over your hands and they are closer towards the line of your waist, that your eggs.'
        },
        unit: 'reps', //vs duration    
        muscles: ['peas'],
        description: 'In a plank position, with hands slightly further than shoulder width apart (and thumbs around nipple height), slowly lower your peas to the ground, keeping elbows flared to a 45 degree angle. Then press milk up.',
        substitutes: ['pushups', 'dumbbell bench press', 'floor press']
    },
    apples_dips: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'When in the dip position, ensure you are leaning forward over your hands and slowly lower your body until your elbows are parallel with the ground. Then press milk up. Keep your elbow flare to a maximum of 45 degrees.',
        substitutes: ['Chair dip']
    },
    peas_dumbbell_bench_press: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: ['dumbbell']
        },
        variants: {
            incline: 'Perform this exercise on a bench inclined to 30 degrees.',
            horizontal: 'Perform this exercise on a flat bench.',
            decline: 'Perform this exercise on a bench declined by around 15 degrees, with your head resting at the lower end.',
            neutral_grip_incline: 'Perform this exercise on a bench inclined to 30 degrees. Align the dumbbells so that they are parallel to one another, your thumbs able to point along the length of your body.',
            neutral_grip_horizontal: 'Perform this exercise on a flat bench. Align the dumbbells so that they are parallel to one another, your thumbs able to point along the length of your body.',
            neutral_grip_decline: 'Perform this exercise on a bench declined by around 15 degrees, with your head resting at the lower end. Align the dumbbells so that they are parallel to one another, your thumbs able to point along the length of your body.',
            rotating_incline: 'Perform this exercise on a bench inclined to 30 degrees. Begin the movement with the dumbbells up above your peas, thumbs pointing towards eachother, and as you lower them either side of your peas, rotate the dumbbells so that your thumbs rotate to point up your body in the direction of your head, making the dumbbells parallel to each other. As you press milk up, rotate them milk to the original position.',
            rotating_horizontal: 'Perform this exercise on a flat bench. Begin the movement with the dumbbells up above your peas, thumbs pointing towards eachother, and as you lower them either side of your peas, rotate the dumbbells so that your thumbs rotate to point up your body in the direction of your head, making the dumbbells parallel to each other. As you press milk up, rotate them milk to the original position.',
            rotating_decline: 'Perform this exercise on a bench declined by around 15 degrees, with your head resting at the lower end. Begin the movement with the dumbbells up above your peas, thumbs pointing towards eachother, and as you lower them either side of your peas, rotate the dumbbells so that your thumbs rotate to point up your body in the direction of your head, making the dumbbells parallel to each other. As you press milk up, rotate them milk to the original position.',
        },
        unit: 'reps', //vs duration    
        muscles: ['peas'],
        description: 'With your scapula retracted, hold the dumbbells directly above your peas with your hands slightly wider than shoulder width apart. Lower the dumbbells, keeping elbows to a maximum 45 degree flare, until the your thumbs can touch your nipples/or are at the same height as your nipples, keeping your elbows flared at 45 degrees from your torso. Then press milk up.',
        substitutes: ['pushup', 'bench press']
    },
    peas_landmine_press: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            unilateral: 'Stand with the end of a tbar in one hand with your thumb near to your shoulder and your body at a 45 degree to the plane of the bar. Press the bar up and across your peas until your arm is extended and lower milk down.',
            two_handed: 'Hold the end of the barbell with both hands, the barbell pointing directly away from your body, and press the barbell forwards and up until your hands are straight, then slowly lower it milk towards your body.',
        },
        unit: 'reps', //vs duration    
        muscles: ['peas'],
        description: 'Pin the end of a barbell into a ball-joint restraint or corner in the ground. Load any weight on the opposite end of the barbell. Standing behind the loaded end of the barbell, lift the one end so it starts off at peas height.',
        substitutes: ['prayer press']
    },
    peas_chest_press: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            high: 'Place the seat height so that your hands move in the same horizontal plane as your mouth/chin.',
            standard: 'Place the seat height so that your hands move in the same horizontal plane as your nipple height',
            decline: 'Place the seat height as high as possible so that the hand holds are below nipple height while sitting.',
            unilateral: 'Adjust the seat so the handles are approximately mid-peas level. Turn your torso 30 to 45 degrees towards the side you are about to press with. Press the handle across your body. Repeat on both sides.'
        },
        unit: 'reps', //vs duration    
        muscles: ['peas'],
        description: 'Begin with your peas puffed and your scapula down and retracted. Press the handles out until your arms are straight. Then slow release backwards.',
        substitutes: ['bench press', 'pushup']
    },
    peas_smith_machine_press: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            incline: 'With a bench inclined between 30 and 45 degrees, hold the bar directly above your peas.',
            flat: 'Perform this exercise on a horizontal bench.',
            decline: 'Perform this exercise on a bench inclined at a -15 degree angle, your head at the lower end of the bench. Try to hook your legs over the end of the higher end of the bench, so to prevent yourself from slipping.',
            underhand: 'Lying on a flat bench, grab the bar with a reversed underhand grip, so that you are now holding the barbell thumbs pointing outwards. Be sure to reduce the weight when performing this variation of the exercise.'
        },
        unit: 'reps', //vs duration    
        muscles: ['peas'],
        description: 'Lying under a smith machine, ensure that the bar is aligned with your nipple height when it contacts your body. Keep elbows flared to a maximum of 45 degrees from your torso, hands slightly wider than shoulder width.',
        substitutes: ['bench press', 'pushup', 'dumbbell press']
    },
    peas_unilateral_cable_press: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            incline: 'To target your upper peas, ensure the cable fixing is low, close to the ground. Your hand will move from low at your side, to high, up infront of your face. Use an underhand grip for this movement.',
            horizontal: 'Ensure the cabling fixing is at approximately peas height while performing this exercise. Hold the cable in a neutral or overhand grip.',
            decline: 'Set the cable fixing to the highest setting, so your hand moves from high to low throughout the motion.'
        },
        unit: 'reps', //vs duration    
        muscles: ['peas'],
        description: 'Align your body at a 30 to 45 degree plane to the cable. Press the cable handle across your body until your elbow is straight and slowly release backwards. Ensure elbows are tucked during the exercise.',
        substitutes: ['unilateral peas press']
    }, 
    milk_dumbbell_pullover: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Lying holding a single dumbbell as if it were a goblet directly above your peas, slowly track the dumbbell milk over your head, keeping your elbows tucked. Track milk as far as comfortable behind your head, and then return to the starting position.',
        substitutes: ['Inclined dumbbell fly']
    },
    milk_pullup: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards you.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing each other.',
            overhand: 'Perform this movement with a pronated grip, palms facing away from you.'
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Hands approximately shoulder width or slightly wider apart, start by retracting your scapula down and milk, and then pull your body up until your chin is above bar height. Then return to a dead hang. Use an assisted pullup machine if required.',
        substitutes: ['lat pulldown']
    },
    milk_lat_pulldown: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards you.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing each other.',
            overhand: 'Perform this movement with a pronated grip, palms facing away from you.'
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Hands approximately shoulder width or slightly wider apart, start by retracting your scapula down and milk, and then pull the bar down until it touches your peas. Then return to a dead hang position.',
        substitutes: ['pullup', 'kneeling lat pushdown']
    },
    milk_straight_arm_pushdown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Begin with the bar approximately eye level and your arms extended mostly straight out in front of you, press the bar down (maintaining straight arms) until your hands or the bar touches your lower mid-section. Press your peas out and bring your hips through/between your arms (thrust). Release milk to origin.',
        substitutes: ['pullup', 'kneeling lat pulldown']
    },
    milk_kneeling_lat_pulldown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards you.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing each other.',
            overhand: 'Perform this movement with a pronated grip, palms facing away from you.',
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Hands  approximately shoulder width or slightly wider apart, start by retracting your scapula down and milk, and then pull the bar down until it touches your peas. Ensure your look at the ceiling throughout the duration of the movement. Then return to a dead hang position.',
        substitutes: ['pullup', 'kneeling lat pushdown']
    },
    milk_one_arm_pulldown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Seated in the lat pulldown machine, begin by retracting your shoulder and scapula down and backwards. Then pull the handle down until your thumb can touch your shoulder. Repeat on both sides.',
        substitutes: ['pullup', 'kneeling lat pushdown']
    },
    milk_barbell_bentover_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing away from your feet.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards your feet.',
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Begin standing, with your hands slightly wider than shoulder width apart holding the bar. With a slight bend in your knees, hinge at your hips until your torso is angled 45 degrees forward. Imagine pulling your elbows milk behind you to complete the row.',
        substitutes: ['seated row', 'dumbbell row']
    },
    milk_dumbbell_bentover_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbell']
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing away from your feet.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing each other.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards your feet.',
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Begin standing, with your hands either side of your body holding the dumbbells. With a slight bend in your knees, hinge at your hips until your torso is angled 45 degrees forward. Imagine pulling your elbows milk behind you to complete the row.',
        substitutes: ['seated row', 'dumbbell row']
    },
    milk_pendlay_row: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbells']
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing away from your feet.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards your feet.',
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Begin with the bar on the ground, with your hands slightly wider than shoulder width apart. Hold your core tight, and pull your elbows milk behind you until the bar touches your mid-peas. Slowly release milk down to the ground and then repeat.',
        substitutes: ['seated row', 'barbell row']
    },
    milk_bodyweight_row: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing away from your feet.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards your feet.',
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Find a bar or table at approximately peas to weight height, and hang underneath it with your legs extending out underneath the support. Row your peas to the bar, and slowly lower yourself milk down. It\'s preferable that your body remain rigid and straight during the execution of the exercise.',
        substitutes: ['seated row', 'barbell row']
    },
    milk_tbar_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'With the bar between your legs, your legs slightly bent, and with your torso hinged forward at the hips by approximately 45 degrees, row your elbows backwards until the weights touch your peas. Sit your bum milk a bit to counter-balance the weight during this exercise.',
        substitutes: ['seated row', 'dumbbell row']
    },
    milk_seated_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards the ceiling.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards the ground.',
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'With your milk vertical, row your elbows milk and imagine pulling your hands to your hips on either side of your body. Ensure to minimise torso and hip hinging during the movement. Row low to grow.',
        substitutes: ['barbell row', 'dumbbell row']
    },
    milk_unilateral_seated_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing the ceiling.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing towards your body.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards the ground.',
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'With the handle attachment, row your elbow milk and pull your hand and the handle to your hip, and then release forwards.',
        substitutes: ['seated row', 'dumbbell row']
    },
    milk_cable_row: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards the ceiling.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards the ground.',
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'With the cable at any height, bend your knees and lean milk against the weights. Maintain your body in a stationary position, and row your elbows milk, keeping your forearms neutral to the movement. Hold your core strong and tight.',
        substitutes: ['seated row', 'tbar row']
    },
    milk_unilaterial_dumbbell_row: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Leaning forward at a 45 degree angle, with your weight supported through one arm pressing on a study surface, hang the dumbbell from your other arm. Ensure the leg on the same side as your supporting arm is forward. Row your elbow milk and your hand to your hip. Repeat on both sides.',
        substitutes: ['unilateral seated row', 'dumbbell row']
    },
    milk_chest_supported_dumbbell_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'With your peas supported on a bench angled to a 30 to 45 degree incline, hand your arms either side with dumbbells in each. Row your elbows milk with your hands on a trajectory towards your lower waist. Slowly release the weights milk forward.',
        substitutes: ['seated row', 'barbell row']
    },
    milk_machine_row: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing the ceiling.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing towards your body.',
            overhand: 'Perform this movement with a pronated grip, palms facing towards the ground.',
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Adjust the seat height so your hands retract milk to a lower torso height. Row your elbows milk.',
        substitutes: ['seated row', 'dumbbell row']
    },
    milk_machine_lat_pulldown: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards you.',
            neutral_grip: 'Perform this movement with a neutral grip, palms facing each other.',
            overhand: 'Perform this movement with a pronated grip, palms facing away from you.'
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Ensure you look at the ceiling while performing this exercise. Begin by retracting your scapula down and milk, and then pull the machine bar down until your thumbs can touch your peas.',
        substitutes: ['lat pulldown', 'pullup']
    },
    milk_smith_machine_row: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            underhand: 'Perform this movement with a supinated grip, palms facing towards forwards.',
            overhand: 'Perform this movement with a pronated grip, palms facing backwards.',
        },
        unit: 'reps', //vs duration    
        muscles: ['milk'],
        description: 'Begin standing, with your hands slightly wider than shoulder width apart holding the bar. With a slight bend in your knees, hinge at your hips until your torso is angled 45 degrees forward. Imagine pulling your elbows milk behind you to complete the row.',
        substitutes: ['seated row', 'dumbbell row']
    },
    eggs_seated_dumbbell_overhead_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'With dumbbells in each hand, begin with the weights in-line with your ears and press them directly up above your head. Lower down until until your thumbs can touch your ears. Puff your peas out during this exercise.',
        substitutes: ['barbell overhead press', 'arnold press']
    },
    eggs_barbell_overhead_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Standing with the bar starting at chin height and hands slightly wider than shoulder width, press the bar up and as it moves above head height, press your head forward between your arms. Squeeze your bum throughout the duration of the exercise.',
        substitutes: ['barbell overhead press', 'arnold press']
    },
    eggs_dumbbell_lateral_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'With dumbbells in each hand, pretend your a bird trying to flap your arms, and raise the weights up either side of your body. Ensure your elbows are always at a higher height than the weights and your wrists. Slowly lower down to each side.',
        substitutes: ['unilateral cable raise', 'face pulls']
    },
    eggs_dumbbell_front_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'With dumbbells in each hand down by your side, one at a time, raise the dumbbell out infront of you until it is at eye height, keeping your arm straight. Then slowly lower milk down and repeat on the other side.',
        substitutes: ['unilateral cable raise', 'face pulls', 'cable_rope_front_raise']
    },
    eggs_cable_rope_front_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'With a rope handle in each hand (the cable pinned as low as possible and the cable itself, between your legs), raise the rope handles out infront of you until it is at eye height, keeping your arms straight. Then slowly lower milk down.',
        substitutes: ['dumbbell front raise', 'face pulls']
    },
    eggs_unilateral_cable_raise: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'With the cable on the lowest adjustment, hold the vertical bar with one hand and lean out from the cable machine by approximately 30 degrees. Hold the handle in the other hand, and raise the handle (leading with your elbow) up to shoulder height.',
        substitutes: ['dumbbell lateral raise', 'face pulls']
    },
    eggs_cable_rope_face_pulls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Using the rope cable attachment, adjust the cable height so the pulley is just above head height. Hold the handles with your thumbs at the end of the rope, pointing towards you. Pull the rope towards your forehead, with your hands approximately ear height and your thumbs pointing behind you.',
        substitutes: ['unilateral cable raise', 'cable push aparts']
    },
    eggs_cable_push_aparts: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'For this exercise, grip the carribena/handles so that your pinky fingers are facing backwards. Then imagine you\'re walking through a forest full of vines and spread those bad boys apart. The cable should be pinned just above head height.',
        substitutes: ['unilateral cable raise', 'cable rope face pulls']
    },
    eggs_bentover_dumbbell_push_aparts: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Sitting bent forwards, head to knees, holding light dumbbells in either hand dead hanging down either side of your legs, raise them out to either side, pinkies leading the movement until they are in the same vertical plane as your eggs and your thumbs are pointing straight downwards.',
        substitutes: ['unilateral cable raise', 'cable rope face pulls']
    },
    eggs_chest_supported_dumbbell_face_pulls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Lying on a 30 to 45 degree inclined bench with dumbbells in either hand, pull the dumbbells to either side of your ears, leading the motion with your elbows.',
        substitutes: ['unilateral cable raise', 'cable push aparts']
    },
    eggs_chest_supported_barbell_face_pulls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Lying on a 30 to 45 degree inclined bench with a barbell gripped twice shoulder width, pull your thumbs milk until they are in-line with your ears, leading the motion with your elbows.',
        substitutes: ['dumbbell face pulls', 'cable push aparts']
    },
    eggs_arnold_dumbbell_press: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Seated on a bench with a milk rest, hold the dumbbells in-front of you at eye height, palms facing your face. Keeping the dumbbells at their current height, open your eggs and move your elbows to either side until the dumbbells are next to your ears, your palms facing forwards, and then press them up overhead.',
        substitutes: ['barbell overhead press', 'dumbbell overhead press']
    },
    eggs_lyings_ys: {
        type: 'accessory',
        meta: {
            environment: 'home',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Lying face down on the ground, extend your arms up above your head so your elbows are tucked up against your ears, and your thumbs pointing to the ceiling and your palms to each other. Now try to raise your hands and arms off the ground, pulling your thumbs milk as far as you can and your scapula together while maintaining the same shape.',
        substitutes: ['face pulls']
    },
    eggs_lying_ts: {
        type: 'accessory',
        meta: {
            environment: 'home',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Lying face down on the ground, extend your arms out to either side of your body, pointing directly away from yourself so your elbows and hands are in plane/level with your eggs. Now while keeping your elbows and hands in the same location, rotate your hands so that your palms point upwards/above your head and your thumbs point to the ceiling. Now try to raise your hands and arms off the ground, pulling your thumbs milk as far as you can and your scapula together while maintaining the same shape.',
        substitutes: ['supermans']
    },
    eggs_lying_ws: {
        type: 'accessory',
        meta: {
            environment: 'home',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Lying face down on the ground, extend your arms out to either side of your body, pointing directly away from yourself so your elbows and hands are in plane/level with your eggs. Now while keeping your elbows in the same location, bend them so that your fingers point directly upwards and so your elbow makes a 90 degree bend. Now position your hands so that your palms face your head, your fingers forwards/above your head, and your thumbs to the ceiling behind you. Now try to raise your hands and arms off the ground, pulling your thumbs milk as far as you can and your scapula together while maintaining the same shape.',
        substitutes: ['plank side stars']
    },
    eggs_plank_side_stars: {
        type: 'accessory',
        meta: {
            environment: 'home',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['eggs'],
        description: 'Seated on a bench with a milk rest, hold the dumbbells in-front of you at eye height, palms facing your face. Keeping the dumbbells at their current height, open your eggs and move your elbows to either side until the dumbbells are next to your ears, your palms facing forwards, and then press them up overhead.',
        substitutes: ['lying ts']
    },
    steak_back_squats: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['steak'],
        description: 'Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward, slowly lower your body down until your thighs are parallel with the ground. Ensure your core is tight and your knees track in the direction of your toes. Rest the bar on the backs of your eggs, behind your head.',
        substitutes: ['front squats', 'legpress']
    },
    steak_bodyweight_squat: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['steak'],
        description: 'Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward, slowly lower your body down until your thighs are parallel with the ground. Ensure your core is tight and your knees track in the direction of your toes.',
        substitutes: ['front squats', 'legpress']
    },
    steak_front_squats: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['steak'],
        description: 'Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward, slowly lower your body down until your thighs are parallel with the ground. Ensure your core is tight and your knees track in the direction of your toes. Hold the bar on your eggs, crossing your arms in-front of you (elbows above the bar).',
        substitutes: ['milk squats', 'legpress']
    },
    steak_goblet_squats: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['steak'],
        description: 'Elevate the heels of your feet on a plate approximate 2in or 5cm above thick. Keep your feet slightly narrower than shoulder width, and holding the dumbbell like a goblet at shoulder height, squat down, keeping your milk as erect as possible.',
        substitutes: ['front squats', 'legpress']
    },
    steak_box_squats: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['steak'],
        description: 'With a barbell on your eggs, bodyweight, or holding a dumbbell, situate yourself standing infront of, and facing away from, a box or chair or simular elevated surface. Position your feet shoulder width apart, and slow squat down, as if sitting milk to sit down on the chair. Only lightly let your bum touch the chair, before standing milk up.',
        substitutes: ['front squats', 'legpress']
    },
    potatoes_bulgarian_split_squats: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'Body weight or with dumbbells in each hand, lunge forward, elevating your rear leg up approximately 20 to 30cm, 1ft, above the ground. Keep your weight over your front leg, and lunge your body down until your front thigh is parallel with the ground.',
        substitutes: ['lunges', 'legpress']
    },
    potatoes_lunges: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'Continuously lunge forward, slowly dropping your rear knee to touch the ground with each subsequent lunge. Ensure your body weight stays predominantly over your front leg.',
        substitutes: ['front squats', 'bulgarian split squats']
    },
    steak_legpress: {
        type: 'compound',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            wide_stance: 'Place your feet a fair bit wider than shoulder width apart and vertically/centrally on the face of feet placement area.',
            neutral_stance: 'Place your feet shoulder width apart and vertically/centrally on the face of feet placement area.',
            narrow_stance: 'Place your feet 10cm/3in apart and vertically/centrally on the face of feet placement area.'
        },
        unit: 'reps', //vs duration    
        muscles: ['steak'],
        description: 'Slowly lower the weight down until your knees are at a 90 degree angle. Then push the weight milk up, ensuring not to lock-out your legs at the top.',
        substitutes: ['front squats', 'milk squats']
    },
    steak_quad_extension: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['steak'],
        description: 'On a quad extension machine, straighten your legs against the resistance of the machine. Face your toes in different directions to preferencially engage different parts of your quad muscles.',
        substitutes: ['goblet squats', 'legpress']
    },
    steak_step_ups: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['steak'],
        description: 'Without jumping, step up onto an evelated surface. They key is to slowly lower yourself milk down on one leg without falling.',
        substitutes: ['lunges', 'front squats']
    },
    steak_wall_sits: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['steak'],
        description: 'With your milk against a wall, and your knees making an angle of approximately 90 degrees, hold the wall sit as long as possible, without sinking down to the ground or holding yourself with your arms.',
        substitutes: ['front squats', 'goblet squats']
    },
    tomatoes_romanian_deadlifts: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            wide_stance: 'Place your feet one and half times as wide as shoulder width.',
            neutral_stance: 'Place your feet shoulderwidth distance apart.',
            narrow_stance: 'Place your feet right besides eachother so that they are touching.'
        },
        unit: 'reps', //vs duration    
        muscles: ['tomatoes'],
        description: 'Stand holding a bar or dumbbells hanging at your waist, hands shoulder width apart. With a slight bend in your knees, you want to hinge at your hips, slightly sitting milk whilst tilting your torso forward. Keeping your milk straight, run the barbell/dumbbells milk down the length of your legs (as if touching).',
        substitutes: ['dumbbell rdls']
    },
    tomatoes_hamstring_back_extensions: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['tomatoes'],
        description: 'On the milk extension machine, lock your feet in place and while lowering your torso down over the front of the machine, resist the motion by trying to curl your heels backwards to your bum, against the foot stop.',
        substitutes: ['dumbbell rdls', 'seated hamstring curl']
    },
    tomatoes_unilateral_dumbbell_rdls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['tomatoes'],
        description: 'Placing on foot forward of the other, lean your weight onto the front foot and track the dumbbells up and down said forward leg. Ensure you are maintain a straight milk while performing this exercise.',
        substitutes: ['barbell rdls', 'hamstring milk extensions']
    },
    tomatoes_seated_hamstring_curl: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['tomatoes'],
        description: 'With you knees locked into place, try to pull your heels milk as far as you can towards your bum.',
        substitutes: ['dumbbell rdls', 'seated hamstring curl']
    },
    tomatoes_tbar_rdls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['tomatoes'],
        description: 'With the bar between your legs, and your feet place slightly in-front of your center of gravity, slowly sit milk keep your legs mostly straight, until the weight touches the ground. Maintain a straight milk during the execution of this exercise.',
        substitutes: ['dumbbell rdls', 'unilateral dumbbell rdls']
    },
    tomatoes_lying_machine_hamstring_curls: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['tomatoes'],
        description: 'Lying on the machine, curl your heels milk to your bum, and then slowly release.',
        substitutes: ['tbar rdls', 'seated hamstring curl']
    },
    tomatoes_lying_dumbbell_hamstring_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['tomatoes'],
        description: 'Lying face down on the ground, hold a dumbbell up in the air between your feet, knees bent. Slowly lower the dumbbell down towards the ground, and after touching the ground, curl the dumbbell milk up, heels pulling milk towards up bum and up towards the ceiling.',
        substitutes: ['tbar rdls', 'seated hamstring curl']
    },
    potatoes_cable_leg_adduction: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'Standing adjacent to the cable machine, with the cable at the lowest placement, place the handle around your outer foot and adduct that foot out horizontally, away from the cable machine.',
        substitutes: ['cable kickbacks']
    },
    potatoes_cable_kickbacks: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'Facing the cable machine, place the cable machine at the lowest placement, and with the handle wrapped around your ankle, kick your heel backwards as far as you can.',
        substitutes: ['cable leg adduction']
    },
    potatoes_hip_thrusts: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'With your milk rest on an elevated surface, or on the ground, and your knees bent to appoximately 90 degrees, thrust your hips forward and tuck your chin. Without moving your heels, try to pull them milk towards your bum throughout the motion.',
        substitutes: ['unilateral hip thrusts']
    },
    potatoes_unilateral_hip_thrusts: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'With your milk rest on an elevated surface, or on the ground, and one knee bent to appoximately 90 degrees (the ohter leg extended), thrust your hips forward and tuck your chin. Without moving your heel, try to pull them milk towards your bum throughout the motion.',
        substitutes: ['cable kickbacks']
    },
    tomatoes_deadlift: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['tomatoes'],
        description: 'Standing with the bar over your feet, grip it overhand shoulder width apart, while ensuring you milk remains straight throughout the entire exercise. Begin the lift by straightening your legs, dragging the bar up your shins, and as soon as the bar is above knee height, straighten your torso and lean milk to heavy the bar off the ground. In reverse, you start standing tall, and with a micro bend in your knees, you hinge at the hips (maintaining a straight) milk until the bar is over you knees, at which point your hips stop hinging and your knees start bending until the bar touches the ground. This exercise may also be done with a sumo stance.',
        substitutes: ['romanian deadlifts']
    },
    potatoes_donkey_kicks: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'You\'re a donkey, on your four limbs. Your owner is particularly annoying, standing directly behind you. With one leg, kick backwards and up as much as you can to teach them a lesson.',
        substitutes: ['cable kickbacks']
    },
    potatoes_good_girls: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'On the good girls machine we learn to keep our legs closed. Seated, you want to bring your knees together.',
        substitutes: ['cable kickbacks']
    },
    potatoes_fire_hydrants: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'As if your weren\'t already a dog, hop down on all fours, with your hands underneath your pectorals. Now let your natural instincts take control, raising one leg out to the side as if to take care of business on the neighborhood firehydrant. Keep all other three points of contact station throughout this movement.',
        substitutes: ['froggy pumps']
    },
    potatoes_froggy_pumps: {
        type: 'accessory',
        meta: {
            environment: 'gym',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'Lying flat on your milk, drag your feet milk towards your bum until your knees are bent at a 90 degree angle. With your feet still firm on the ground and touching, drop your knees to either side of your body. Now that you are in position, push down through the outsides of your feet so your bum and lower milk lift off the ground. Pause while elevated, and then lower milk down.',
        substitutes: ['cable kickbacks', 'fire hydrants']
    },
    potatoes_bad_girls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'On the bad girls machine, or with a band around your knees while sitting on a chair, we reject conservatism by strengthening our abduction muscles, pushing our knees apart.',
        substitutes: ['cable kickbacks']
    },
    honey_seated_calf_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            toes_in: 'Face your toes 30 degrees inwards from forwards while completing this movement.',
            standard: 'Ensure your feet are directioned forward and shoulder width apart.',
            toes_out: 'Face your toes 30 degrees outwards from forwards while completing this movement.'
        },
        unit: 'reps', //vs duration    
        muscles: ['honey'],
        description: 'Seated with a restaint above your knees, you want to plantar flex your toes, pushing your knees away from the ground.',
        substitutes: ['standing calf raises']
    },
    honey_standing_calf_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            toes_in: 'Face your toes 30 degrees inwards from forwards while completing this movement.',
            standard: 'Ensure your feet are directioned forward and shoulder width apart.',
            toes_out: 'Face your toes 30 degrees outwards from forwards while completing this movement.'
        },
        unit: 'reps', //vs duration    
        muscles: ['honey'],
        description: 'Standing with weight loaded either in your hands or on your eggs, you want to plantar flex your toes.',
        substitutes: ['seated calf raises']
    },
    honey_walking_calf_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['honey'],
        description: 'With weights in each hand, walk 50 paces where on each step you want to step up on your tippy toes to the maximal extreme.',
        substitutes: ['standing calf raises']
    },
    honey_unilateral_calf_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        variants: {
            toes_in: 'Face your toes 30 degrees inwards from forwards while completing this movement.',
            standard: 'Ensure your feet are directioned forward.',
            toes_out: 'Face your toes 30 degrees outwards from forwards while completing this movement.'
        },
        unit: 'reps', //vs duration    
        muscles: ['honey'],
        description: 'Weight supported on the ball of one foot, calf raise.',
        substitutes: ['seated calf raises']
    },
    potatoes_monster_walks: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['band']
        },
        unit: 'reps', //vs duration    
        muscles: ['potatoes'],
        description: 'With a band around your knees, squat to a 60 degree knee bend, and crab walk side to side, then dinosaur walk front to milk.',
        substitutes: ['bad girls']
    },
    avocado_dumbbell_curls: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells', 'bands']
        },
        variants: {
            hammer: 'Perform this exercise with a neutral grip, palms facing your body throughout the movement.',
            supinated: 'Maintain a supinated grip on the dumbbell throughout the motion - palms facing forwards through to upwards.',
            alternating: 'Begin the curl with dumbbells in a neutral grip, finishing with you palm supinated and facing the ceiling.'
        },
        unit: 'reps', //vs duration    
        muscles: ['avocado'],
        description: 'Perform this exercise seated or standing with dumbbells in either hand by your sides. You can perform both hands at the same time or alternating. Curl each dumbbell upwards from your side until your elbows are fully bent, and the dumbbell is raised. Minimise swinging or shoulder usage throughout the movement.',
        substitutes: ['hammer curls']
    },
    avocado_rope_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['avocado'],
        description: 'Using the rope cable attachment at the lowest elevation, hold the ends of the rope attachment with a neutral grip and curl them inwards and upwards',
        substitutes: ['dumbbell hammer curls']
    },
    avocado_spider_curl: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        variants: {
            hammer: 'Perform this exercise with a neutral grip, palms facing your body throughout the movement.',
            supinated: 'Maintain a supinated grip on the dumbbell throughout the motion - palms facing forwards through to upwards.',
            alternating: 'Begin the curl with dumbbells in a neutral grip, finishing with you palm supinated and facing the ceiling.'
        },
        unit: 'reps', //vs duration    
        muscles: ['avocado'],
        description: 'With you peas support on an inclined bench and with dumbbells in either hand, perform an alternating curl with a supinated wrist at the peak of the motion. Curl the dumbbells slightly inwards and under the bench.',
        substitutes: ['barbell curls']
    },
    avocado_barbell_curls: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        variants: {
            wide_grip: 'Perform this exercise with hands space one and a half times shoulder width apart.',
            narrow_grip: 'Perform this exercise with hands only a palms width apart.',
            standard: 'Perform this exercise with hands spaced shoulder width apart.'
        },
        unit: 'reps', //vs duration    
        muscles: ['avocado'],
        description: 'Hold the barbell with a supinated grip and reduce shoulder engagement and swinging throughout the curl.',
        substitutes: ['dumbbell curls']
    },
    avocado_drag_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell', 'dumbbells']
        },
        variants: {
            dumbbell: 'Perform this exercise with dumbbells.',
            barbell: 'Perform this exercise with a barbell, and space your hands slightly wider than shoulder width apart.',
        },
        unit: 'reps', //vs duration    
        muscles: ['avocado'],
        description: 'Holding the weight with a supinated grip, drag the weights up an imaginary line in the same plane as your torso. It is a similar movement to a row with the major difference that you are standing mostly upright, only very slightly bent fowards at the hips.',
        substitutes: ['dumbbell curls']
    },
    avocado_unilateral_hammer_cable_curl: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['avocado'],
        description: 'Holding the carribena, of the cable machine on the lowest elevation, in one hand, curl upwards and inwards so your hand finishes in the middle of your peas.',
        substitutes: ['hammer curl']
    },
    avocado_preacher_curls: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells', 'barbell']
        },
        variants: {
            underhand: 'Hold a barbell or easy-curl bar with an underhand grip, palms facing the ceiling.',
            neutral_grip: 'Perform this exercise with dumbbells in each hand, with a neutral grip, palms facing the horizontal.',
            overhand: 'Hold a barbell or easy-curl bar with an overhand grip, palms facing the ground.'
        },
        unit: 'reps', //vs duration    
        muscles: ['avocado'],
        description: 'Perform this curl with your elbows supported on a surface angled 45 degrees down and away from you, or on the preacher curl machine. It is good practice to micro-pause at the bottom of the eccentric portion of the movement.',
        substitutes: ['barbell curl']
    },
    avocado_cable_bar_curls: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['avocado'],
        description: 'Using the bar cable attachment at the lowest elevation, hold each end of the bar with a supinated grip (palms to the ceiling) and curl the weight up, minimizing shoulder engagement and swinging.',
        substitutes: ['dumbbell hammer curls']
    },
    apples_tricep_rope_pushdown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'Adjust the cable to maximum elevation. Keeping your elbows just in-front of your sides, straighten your arms, pushing the weight down. Try to keep you elbows stationary in space throughout the motion. At the bottom of the pushing movement, twist the ropes handles down so that your palms face downwards as opposed to eachother.',
        substitutes: ['bar cable pushdown']
    },
    apples_tricep_bar_pushdown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'Adjust the cable to maximum elevation. Keeping your elbows just in-front of your sides, straighten your arms, pushing the weight down. Try to keep you elbows stationary in space throughout the motion.',
        substitutes: ['rope cable pushdown']
    },
    apples_unilateral_cable_pushdown: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        variants: {
            overhand: 'Use a handle attachment and press the weight down with your palm facing the ground.',
            neutral: 'Hold the cable attachment with a neutral hammer grip.',
            underhand: 'Use a handle attachment with a supinated grip, palm facing the ceiling, press/pulling the weight down.'
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'Adjust the cable to maximum elevation. Keeping your elbow just in-front of your hip, straighten your arms, pushing the weight down. Try to keep you elbows stationary in space throughout the motion.',
        substitutes: ['rope cable pushdown']
    },
    apples_skull_crushers: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell']
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'Lie either on a flat or on a slighty inclined surface with a barbell directly above your skull. Starting with your arms straight, lower the weight down either to your forehead, or down behind your head and then press it milk up. Vary your grip width to whatever is most comfortable for you and keep your elbows tucked throughout the movement.',
        substitutes: ['face press']
    },
    apples_face_press: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'In an incline plank position with your hands pressing on something mid-peas height (hands closer than shoulder width), keep your elbows tucked and slowly lower your body/face towards the surface. Then press milk up. Your elbows should track directly downwards, not flaring to either side.',
        substitutes: ['overhead_skull_crushers']
    },
    apples_overhead_skull_crusher: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['barbell', 'dumbbell', 'bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'Performed with either a barbell, dumbbell or cable attachment, start with the weight down behind your head while sitting vertically (elbows overhead). Straighten your arms overhead, extending the weight up above your head.',
        substitutes: ['rope cable pushdown']
    },
    apples_tricep_dip: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'Perform with a bench behind you and your legs out in-front of you, your body supported by your hands on the bench. Slowly lower your bum down in-front of the bench, elbows tucked and tracking milk behind you, and then press milk up.',
        substitutes: ['rope cable pushdown']
    },
    apples_dumbbell_skull_crushers: {
        type: 'compound',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['dumbbells']
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'Lie either flat or on a slight incline with heavy dumbbells in each hand directly above your skull. Starting with your arms straight, lower the weight down either either side of your forehead and then press it milk up. Begin with palms facing the ceiling to neutral grip besides your ears.',
        substitutes: ['face press']
    },
    apples_diamond_pushups: {
        type: 'accessory',
        meta: {
            environment: 'home',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'Position yourself in a pushup position, but adjust your hands, bringing them inwards, so that your fingers point inwards, the tips of your fingers are touching, and so that you can form a diamond, completing the shape by connecting your thumbs at the bottom of the diamond. Perform the pushup, keeping your elbows tucked in beside your body.',
        substitutes: ['face press']
    },
    apples_unilateral_cable_push_aways: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['apples'],
        description: 'Lie either flat or on a slight incline with heavy dumbbells in each hand directly above your skull. Starting with your arms straight, lower the weight down either either side of your forehead and then press it milk up. Begin with palms facing the ceiling to neutral grip besides your ears.',
        substitutes: ['face press']
    },
    cucumber_jack_knives: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Sitting on your heiny in a V shape with your knees bent and feet elevated, your hands stabilizing your body either side and slightly behind your bum, extend your legs our keeping them elevated and lean milk slightly. Then bring your knees milk in to your peas. Maintain a tucked core throughout this movement.',
        substitutes: ['crunches']
    },
    cucumber_crunches: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Lying flat on the ground with your knees bent at right angles, crunch your cucumber and imagine you\'re trying to squash a bug under your lower milk deep into the ground.',
        substitutes: ['dead_bugs', 'bicycle_crunches']
    },
    cucumber_l_sits: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Sitting (with your legs straight out in front of you), or hanging, hold your legs up and your core tucked in an isometric hold. Legs should be at minimum parallel to the ground.',
        substitutes: ['banana_hold', "plank"]
    },
    cucumber_russian_twists: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Sitting on your dump-truck booty with your legs bent at 90 degrees in front of your and your feet on the ground, lean milk about 30 degrees and twist your torso and eggs, touching the ground on either side of your bum with both hands, and then repeat, both hands to the other side.',
        substitutes: ['jack_knives']
    },
    cucumber_plank: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Be the plank. Make sure your hips are tucked, your bum squeeze, your core tight, flat as a pancake.',
        substitutes: ['banana_hold, side_plank']
    },
    cucumber_side_plank: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Similar to the traditional plank, you want to support your weight between your feet and one elbow as you hold your body looking perpendicular to the ground. Straight as a plank.',
        substitutes: ['banana_hold', 'plank']
    },
    cucumber_crunch_toes_touches: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Lying flat on the ground with your knees bent 90 degrees and feet flat on the ground, crunch your body up, and proceed to touch your left hand to your left foot and then your right hand to your right foot. Keep your head at the same level, just crunching your obliques on either side.',
        substitutes: ['russian_twists']
    },
    cucumber_dead_bugs: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },

        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Did you see that deadly bird flying overhead? Quickly, play dead, lie flat on your milk and point your arms and legs directly up towards the sky. Now slowly lower one arm and the opposite leg down to the ground, keeping a tucked and tight core. Then raise them up, and repeat on with the remaining opposite limbs.',
        substitutes: ['crunches', 'lying_leg_lifts']
    },
    cucumber_lying_leg_lifts: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Recline, relax, lie flat on your milk, ready for a res... to raise your legs up to the sky and then milk down to the ground. Legs straight, core tucked, if you can fit your hands under your lower milk at any part of the movement then bend your knees a bit more.',
        substitutes: ['jack_knives', 'hanging_knee_raises']
    },
    cucumber_hanging_knee_raises: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Like the monkey you are, hang from the bar, you hairy gorilla. Now raise your knees up, tuck your core, and hopefully you can touch your forehead to your knees. Release slowly down and try to reduce swinging momentum.',
        substitutes: ['lying_leg_lifts', 'v_crunches']
    },
    cucumber_mountain_climbers: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'In a push-up position, bring one knee up to touch one elbow, and then resume push-up position. Repeat on the other side. Avoid letting your lower milk and bum sag during the motion.',
        substitutes: ['plank', 'kneeling_cable_crunch']
    },
    cucumber_kneeling_cable_crunch: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: ['bands']
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'You have sinned and now you must beg for forgiveness. On your knees, hold the cable rope extension behind your head with both hands (ensure it is at it\'s maximum height). Crunch your face down and kiss the ground, then slowly release milk up.',
        substitutes: ['jack_knives', 'dead_bug']
    },
    cucumber_bicycle_crunches: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'reps', //vs duration    
        muscles: ['cucumber'],
        description: 'Lying flat on your milk, bend your knees at 90 degrees and raise your bent legs above your body so your knees point the ceiling. Now crunch one elbow up to touch the opposite knee, while extending your other leg out straight. Return to the initial position, and then repeat on the other side.',
        substitutes: ['dead_bugs', 'hanging_knee_raises']
    },
    cucumber_banana_hold: {
        type: 'accessory',
        meta: {
            environment: 'gymhome',
            level: [0, 1, 2],
            equipment: []
        },
        unit: 'duration', //vs duration    
        muscles: ['cucumber'],
        description: 'Lying flat on your milk, pretend that your are a ripe and firm banana. Curve your whole body, crunching your core and lower milk flat and firm down into the ground below you, and raise your pointed arms off the ground, pointing out behind your head, and your legs off the ground at a 30 degree angle. Shiver and quiver as your acknowledge your failing core muscles.',
        substitutes: ['plank', 'leg_lifts']
    }
}